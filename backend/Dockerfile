# Stage 1: Build binary Golang
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod ./
COPY main.go ./
RUN go build -o server main.go

# Stage 2: Runtime ringan dengan Alpine
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/server .
COPY portfolio_data.json ./portfolio_data.json

ENV PORT=8080
ENV DATA_FILE=/app/portfolio_data.json
EXPOSE 8080

CMD ["./server"]
