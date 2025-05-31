# PDF Processing Project

This project is a client-server application for PDF processing, built with Node.js and containerized using Docker.

## Project Structure

```
.
├── client/         # Frontend application
├── server/         # Backend server
├── Dockerfile      # Docker configuration for the application
└── docker-compose.yml  # Docker services configuration
```

## Prerequisites

- Node.js (v18.x or later)
- Docker and Docker Compose
- pnpm (package manager)

## Services

The project uses the following services:
- Valkey (Redis-compatible database) - Port 6379
- Qdrant (Vector database) - Port 6333

## Getting Started

1. Clone the repository:
```bash
git clone <https://github.com/RickyVishwakarma/PDFApp.git>
cd <newPdf>
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the services using Docker Compose:
```bash
docker-compose up -d
```

4. Start the development server:
```bash
# Start the backend server
cd server
pnpm start

# Start the frontend client
cd client
pnpm start
```

## Development

The project uses:
- `clsx` for conditional class name management
- Docker for containerization
- pnpm as the package manager

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

clear  
