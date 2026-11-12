package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"sync"
)

var (
	mu       sync.RWMutex
	dataFile = getEnv("DATA_FILE", "portfolio_data.json")
)

func getEnv(key, fallback string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}
	return fallback
}

func enableCORS(w http.ResponseWriter, r *http.Request) bool {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, X-Admin-Token")
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return true
	}
	return false
}

// Optional: Read from GitHub Gist if GIST_ID & GITHUB_TOKEN are configured
func readFromGist(gistID, githubToken string) ([]byte, error) {
	req, err := http.NewRequest("GET", "https://api.github.com/gists/"+gistID, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Authorization", "Bearer "+githubToken)
	req.Header.Set("Accept", "application/vnd.github+json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("gist status %d", resp.StatusCode)
	}

	var gistData struct {
		Files map[string]struct {
			Content string `json:"content"`
		} `json:"files"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&gistData); err != nil {
		return nil, err
	}
	if file, ok := gistData.Files["portfolio_data.json"]; ok && file.Content != "" {
		return []byte(file.Content), nil
	}
	return nil, fmt.Errorf("portfolio_data.json not found in Gist")
}

// Optional: Write to GitHub Gist if GIST_ID & GITHUB_TOKEN are configured
func writeToGist(gistID, githubToken string, content []byte) error {
	payload := map[string]interface{}{
		"files": map[string]interface{}{
			"portfolio_data.json": map[string]string{
				"content": string(content),
			},
		},
	}
	bodyBytes, _ := json.Marshal(payload)
	req, err := http.NewRequest("PATCH", "https://api.github.com/gists/"+gistID, bytes.NewBuffer(bodyBytes))
	if err != nil {
		return err
	}
	req.Header.Set("Authorization", "Bearer "+githubToken)
	req.Header.Set("Accept", "application/vnd.github+json")
	req.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return fmt.Errorf("failed updating gist: status %d", resp.StatusCode)
	}
	return nil
}

func verifyAdminHandler(w http.ResponseWriter, r *http.Request) {
	if enableCORS(w, r) {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	adminToken := getEnv("ADMIN_TOKEN", "rahasia-fauzan-99")
	if r.Header.Get("X-Admin-Token") != adminToken {
		http.Error(w, `{"valid":false,"error":"Invalid Admin Token"}`, http.StatusUnauthorized)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"valid":true}`))
}

func portfolioHandler(w http.ResponseWriter, r *http.Request) {
	if enableCORS(w, r) {
		return
	}
	w.Header().Set("Content-Type", "application/json")

	gistID := getEnv("GIST_ID", "")
	githubToken := getEnv("GITHUB_TOKEN", "")

	switch r.Method {
	case http.MethodGet:
		mu.RLock()
		defer mu.RUnlock()

		if gistID != "" && githubToken != "" {
			if gistData, err := readFromGist(gistID, githubToken); err == nil {
				w.Write(gistData)
				return
			}
		}

		data, err := os.ReadFile(dataFile)
		if err != nil {
			http.Error(w, `{"error":"Portfolio data not found. Please PUSH from CMS first."}`, http.StatusNotFound)
			return
		}
		w.Write(data)

	case http.MethodPut:
		adminToken := getEnv("ADMIN_TOKEN", "rahasia-fauzan-99")
		if r.Header.Get("X-Admin-Token") != adminToken {
			http.Error(w, `{"error":"Unauthorized: Invalid Admin Token (X-Admin-Token)"}`, http.StatusUnauthorized)
			return
		}

		body, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, `{"error":"Failed to read request body"}`, http.StatusBadRequest)
			return
		}

		var js map[string]interface{}
		if json.Unmarshal(body, &js) != nil {
			http.Error(w, `{"error":"Invalid JSON format"}`, http.StatusBadRequest)
			return
		}

		mu.Lock()
		err = os.WriteFile(dataFile, body, 0644)
		if gistID != "" && githubToken != "" {
			if gistErr := writeToGist(gistID, githubToken, body); gistErr != nil {
				log.Printf("Warning: failed saving to Gist: %v", gistErr)
			}
		}
		mu.Unlock()

		if err != nil {
			http.Error(w, `{"error":"Failed saving JSON file"}`, http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"saved","message":"Portfolio data successfully saved to Golang server!"}`))

	default:
		http.Error(w, `{"error":"Method not allowed"}`, http.StatusMethodNotAllowed)
	}
}

func main() {
	port := getEnv("PORT", "8080")
	http.HandleFunc("/api/portfolio", portfolioHandler)
	http.HandleFunc("/api/verify", verifyAdminHandler)
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		enableCORS(w, r)
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"status":"ok","service":"golang-portfolio-api"}`))
	})

	log.Printf("====================================================")
	log.Printf("🚀 Golang Server running at http://localhost:%s", port)
	log.Printf("📦 Data Endpoint : http://localhost:%s/api/portfolio", port)
	log.Printf("🔐 Auth Endpoint : http://localhost:%s/api/verify", port)
	log.Printf("🔑 Default Token : %s", getEnv("ADMIN_TOKEN", "rahasia-fauzan-99"))
	log.Printf("====================================================")
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
