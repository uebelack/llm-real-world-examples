# LLMs, AI Agents and RAG

### Real-World Examples from a Developer's Daily Work

Slides for my talk about practical use of LLMs, AI Agents, and Retrieval-Augmented Generation (RAG) in everyday development work.

## Versions

The talk is available in different language/framework combinations:

| Language | Framework  | Link                                                |
| -------- | ---------- | --------------------------------------------------- |
| English  | JavaScript | https://llm-real-world-examples.vercel.app/         |
| German   | JavaScript | https://llm-real-world-examples-js-de.vercel.app/   |
| German   | Java       | https://llm-real-world-examples-java-de.vercel.app/ |

## Project Structure

```
examples/
  js/         # TypeScript examples (LangChain)
slides/
  js-en/      # English / JavaScript
  js-de/      # German / JavaScript
  java-de/    # German / Java
```

## Examples

Runnable TypeScript demos live in [`examples/js`](examples/js). They use [LangChain](https://js.langchain.com/) and are meant to be run from that directory (locale paths are relative to it).

| Script                          | Topic                                                            |
| ------------------------------- | ---------------------------------------------------------------- |
| `src/001-translation.ts`        | Translate missing keys in locale JSON via Claude (Anthropic API) |
| `src/002-translation-ollama.ts` | Same flow with a local Ollama model                              |
| `src/003-weather.ts`            | Agent with a weather tool (Claude + Open-Meteo)                  |
| `src/004-weather-ollama.ts`     | Same agent pattern with Ollama                                   |
| `src/005-git-commit-message.ts` | Agent sketch for commit messages from a diff                     |

### Prerequisites

- **Claude examples** (`001`, `003`, `005`): set `ANTHROPIC_API_KEY` in your environment.
- **Ollama examples** (`002`, `004`): [Ollama](https://ollama.com/) running locally with the models referenced in each file (`translategemma:12b`, `qwen3.5`, etc.).

### Run

```bash
cd examples/js
bun install   # or: yarn install

# Run from examples/js (not from src/)
bun src/001-translation.ts
bun --watch src/001-translation.ts
```

Lint and format:

```bash
yarn lint:check
yarn format:check
```

## Slides

Slides are built with [Slidev](https://sli.dev) and deployed on [Vercel](https://vercel.com).

```bash
cd slides/<variant>   # e.g. slides/js-en
pnpm install
pnpm dev
```
