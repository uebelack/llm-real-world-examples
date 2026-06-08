# LLMs, AI Agents and RAG

### Real-World Examples from a Developer's Daily Work

Slides for my talk about practical use of LLMs, AI Agents, and Retrieval-Augmented Generation (RAG) in everyday development work.

## Versions

The talk is available in english and german:

- English: https://llm-real-world-examples.vercel.app/
- German: https://llm-real-world-examples-de.vercel.app/1

## Project Structure

```
examples/
  js/         # TypeScript examples (LangChain)
  python/     # Python examples (LangChain)
slides/
  en/         # English
  de/         # German
```

## Examples

### TypeScript

Runnable TypeScript demos live in [`examples/js`](examples/js). They use [LangChain](https://js.langchain.com/) and are meant to be run from that directory (locale paths are relative to it).

| Script                          | Topic                                                   |
| ------------------------------- | ------------------------------------------------------- |
| `src/001-translation.ts`        | Translate missing keys in locale JSON via Anthropic API |
| `src/002-translation-ollama.ts` | Same flow with a local Ollama model                     |
| `src/003-weather.ts`            | Agent with a weather tool (Anthropic + Open-Meteo       |
| `src/004-weather-ollama.ts`     | Same agent pattern with Ollama                          |
| `src/005-git-commit-message.ts` | Agent sketch for commit messages from a diff            |

```bash
cd examples/js
bun install   # or: yarn install

# Run from examples/js (not from src/)
bun src/001-translation.ts
bun --watch src/001-translation.ts
```

### Python

Equivalent Python demos live in [`examples/python`](examples/python). They use [LangChain](https://python.langchain.com/) and are meant to be run from that directory.

| Script                                | Topic                                                        |
| ------------------------------------- | ------------------------------------------------------------ |
| `src/001_translation.py`              | Translate missing keys in locale JSON via Anthropic API      |
| `src/002_translation_ollama.py`       | Same flow with a local Ollama model                          |
| `src/003_weather.py`                  | Agent with a weather tool (Anthropic + Open-Meteo)           |
| `src/004_weather_ollama.py`           | Same agent pattern with Ollama                               |
| `src/005_git_commit_message.py`       | Agent sketch for commit messages from a diff                 |
| `src/006_mail_support.py`             | Support mail response with RAG (LanceDB + Ollama embeddings) |
| `src/007_mail_support_populate_db.py` | Populate LanceDB with support mail embeddings                |

```bash
cd examples/python
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Run from examples/python (not from src/)
python src/001_translation.py
```

### Prerequisites

- **Anthropic examples** (`001`, `003`, `005`, `006`): set `ANTHROPIC_API_KEY` in your environment.
- **Ollama examples** (`002`, `004`): [Ollama](https://ollama.com/) running locally with the model `qwen3.5:latest`.
- **RAG examples** (`006`, `007`): Ollama with `qwen3-embedding:0.6b` for embeddings. Run `007` first to populate the database.

## Slides

Slides are built with [Slidev](https://sli.dev) and deployed on [Vercel](https://vercel.com).

```bash
cd slides/<variant>   # e.g. slides/en
bun install
bun dev
```

## Links

### My Example Tools

- **Babeli**: https://github.com/uebelack/babeli
- **Babeli4J**: https://github.com/uebelack/babeli4j
- **Tossitin**: https://github.com/uebelack/tossitin

### AI Frameworks

- **LangChain**: https://langchain.com/ - AI framework for Python, JS/TS, and Java
- **Vercel AI SDK**: https://ai-sdk.dev/ - TypeScript-first AI SDK with streaming and structured output
- **Google Agent Development Kit**: https://adk.dev/ - Multi-language AI agent framework by Google
- **mastra**: https://mastra.ai/ - TypeScript-first AI framework, built on Vercel AI SDK
- **Spring AI**: https://spring.io/projects/spring-ai - AI integration for the Spring Framework

### Local LLM Tools

- **Ollama**: https://ollama.com/ - Run large language models locally
- **LM Studio**: https://lmstudio.ai/ - Desktop app for running local LLMs
- **llama.cpp**: https://github.com/ggml-org/llama.cpp - C/C++ LLM inference engine

### LLM Observability

- **LangSmith**: https://smith.langchain.com - Commercial LLM tracing and evaluation platform
- **Langfuse**: https://langfuse.com - Open source LLM observability
- **Helicone**: https://helicone.ai - Open source LLM monitoring and analytics
