# PDF Processing Application

A full-stack application for processing and analyzing PDF documents using AI.

## Project Structure

```
├── client/                 # Next.js frontend application
│   ├── app/               # Next.js app directory (pages and layouts)
│   ├── components/        # React components
│   ├── lib/              # Utility functions and shared code
│   ├── public/           # Static assets
│   └── middleware.ts     # Next.js middleware for authentication
│
├── server/                # Node.js backend application
│   ├── index.js          # Main server entry point
│   ├── worker.js         # Background worker for PDF processing
│   └── uploads/          # Temporary storage for uploaded PDFs
│
├── Dockerfile            # Docker configuration for the application
├── docker-compose.yml    # Docker services configuration
└── package.json         # Root package.json for workspace setup
```

## Technology Stack

### Frontend (client/)
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Authentication**: Clerk
- **UI Components**: Custom components
- **Styling**: Tailwind CSS

### Backend (server/)
- **Runtime**: Node.js
- **PDF Processing**: pdf-parse
- **Vector Database**: Qdrant
- **Caching**: Valkey
- **Background Jobs**: Worker threads

## Services

The application uses the following services:

1. **Valkey** (Port 6379)
   - In-memory caching service
   - Used for storing temporary data and session information

2. **Qdrant** (Port 6333)
   - Vector database for semantic search
   - Stores and indexes PDF content for efficient retrieval

## Getting Started

### Prerequisites
- Node.js 18 or higher
- Docker and Docker Compose
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RickyVishwakarma/PDFApp.git
cd PDFApp
```

2. Install dependencies:
```bash
# Install root dependencies
pnpm install

# Install client dependencies
cd client
pnpm install

# Install server dependencies
cd ../server
pnpm install
```

3. Start the services:
```bash
# Start Docker services
docker-compose up -d

# Start the development server
cd ../client
pnpm dev
```

## Development

### Client Development
- The client is built with Next.js and TypeScript
- Uses Clerk for authentication
- Implements a modern, responsive UI
- Features real-time PDF processing status updates

### Server Development
- Node.js backend with Express
- Handles PDF uploads and processing
- Implements worker threads for background processing
- Integrates with Qdrant for vector storage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

clear  
