# Golden Stack Reference

Minimal fullstack starter: **React + FastAPI + UV**

## Quick Start

```bash
# Clone
gh repo clone StrongPromptAI/golden-stack-reference my-project
cd my-project

# Backend
uv venv && source .venv/bin/activate
uv sync

# Frontend
cd frontend && npm install && cd ..

# Configure
cp .env.example .env

# Run (2 terminals)
uv run uvicorn backend.app.main:app --reload --port 8001
cd frontend && npm run dev
```

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vite + React 18 + TypeScript + shadcn/ui |
| Backend | FastAPI + Python 3.11+ |
| Database | PostgreSQL via asyncpg |
| Python Mgmt | UV (latest) |

## Adding shadcn/ui Components

```bash
cd frontend
npx shadcn@latest init
npx shadcn@latest add button card input form
```

## Full Documentation

See the golden-stack skill in repo_docs for complete patterns including:
- Database setup with asyncpg connection pooling
- LLM streaming architecture (HTTPX + SSE)
- Railway deployment configuration
- Pydantic schemas and typed API clients

## License

MIT
