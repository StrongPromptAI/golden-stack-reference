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

See the [repo_docs](https://github.com/StrongPromptAI/repo_docs) repository for complete patterns:

| Resource | Description |
|----------|-------------|
| `skills/golden_stack/SKILL.md` | Full stack patterns, UV, FastAPI, React |
| `skills/golden_stack/STREAMING.md` | LLM streaming (HTTPX + SSE) |
| `skills/railway/SKILL.md` | Railway deployment guide |

## Cursor Users

See `skills/README_CURSOR.md` in repo_docs for:
- How to use skills with `@` mentions
- Starter `.cursor/rules` template
- Best practices for keeping context minimal

Quick setup - add to your `.cursor/rules`:
```markdown
# Golden Stack Project
Backend: `uv run uvicorn backend.app.main:app --reload --port 8001`
Frontend: `cd frontend && npm run dev`
For patterns: @repo_docs/skills/golden_stack/SKILL.md
```

## License

MIT
