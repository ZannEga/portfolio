# Portofolio Fullstack — Neobrutalism x Pixel Art (React + Golang)

Proyek ini adalah aplikasi web portofolio interaktif bergaya **Neobrutalism x 8-Bit RPG Pixel Art** yang 100% *customizable* melalui panel **Live Visual CMS** langsung dari browser, lengkap dengan penyimpanan permanen di server **Golang REST API**.

---

## 📁 Struktur Folder Proyek

```text
portofolio-fullstack/
├── backend/                  # Server API Golang & Database JSON
│   ├── main.go               # Server HTTP Golang (GET & PUT /api/portfolio)
│   ├── go.mod                # Konfigurasi modul Golang
│   ├── Dockerfile            # Siap deploy ke Railway / Render / Fly.io
│   └── portfolio_data.json   # Database JSON (otomatis ter-update saat klik PUSH)
│
└── frontend/                 # Antarmuka Website React + Vite + Tailwind CSS
    ├── package.json          # Daftar dependensi React, Tailwind v4, Lucide Icons
    ├── vite.config.js        # Konfigurasi Vite
    ├── index.html            # Entry HTML + Font Pixel & Space Grotesk
    └── src/
        ├── index.css         # Styling Tailwind & efek bayangan Neobrutalism
        ├── main.jsx          # Bootstrap React
        └── App.jsx           # Komponen utama Portofolio + Live Visual CMS
```

---

## 🚀 Cara Menjalankan di Komputer Lokal (VS Code)

### 1. Jalankan Backend Golang (Terminal 1)
Buka terminal dan masuk ke folder `backend`:
```bash
cd backend
go run .
```
Server Golang akan berjalan di `http://localhost:8080/api/portfolio` dengan token bawaan `rahasia-fauzan-99`.

### 2. Jalankan Frontend React (Terminal 2)
Buka terminal baru dan masuk ke folder `frontend`:
```bash
cd frontend
npm install
npm run dev
```
Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`) di browser.

### 3. Cara Mengubah & Menyimpan Isi Portofolio
1. Klik tombol **CUSTOMIZE CMS** di pojok kanan atas halaman website.
2. Ubah profil, warna tema, daftar proyek, bahasa pemrograman, hard skill, soft skill, atau software.
3. Buka tab **7. GOLANG & JSON**, lalu klik tombol **PUSH (PUT KE GOLANG)**.
4. Seluruh perubahan otomatis tersimpan secara permanen di dalam file `backend/portfolio_data.json`!

---

## ☁️ Cara Deploy ke Cloud (Opsi 2 Fullstack)

1. **Upload ke GitHub**: Push seluruh folder `portofolio-fullstack` ke repositori GitHub milikmu.
2. **Deploy Backend (Railway / Render)**:
   - Hubungkan repositori GitHub ke Railway atau Render.
   - Atur **Root Directory** ke `backend`.
   - Tambahkan Environment Variable `ADMIN_TOKEN` berisi password rahasiamu.
3. **Deploy Frontend (Vercel)**:
   - Hubungkan repositori GitHub ke Vercel.
   - Atur **Root Directory** ke `frontend`.
   - Tambahkan Environment Variable `VITE_API_URL` berisi URL publik server Golang milikmu (contoh: `https://nama-app-golang.up.railway.app/api/portfolio`).
