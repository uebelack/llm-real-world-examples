---
layout: cover
colorSchema: dark
favicon: https://uebelacker.dev/favicon.ico
fonts:
  sans: Fira Code
  serif: Roboto Slab
  mono: Fira Code
---

# LLMs, AI Agents und RAG
### Praxisbeispiele aus dem Entwickleralltag

<div class="absolute bottom-10">
  <span class="font-700">
    David Übelacker
  </span>
</div>

---

# 👨‍💻 Wer bin ich?

- **David �belacker**
- Software Architect @ nag informatik ag in Basel
- 20+ Jahre Erfahrung in der Web- und Mobile-App-Entwicklung

<div class="absolute bottom-10">
  <div class="flex items-end">
    <img src="./images/nag.svg" style="width: 20%" />
    <div style="width:45%"></div>
    <div style="width: 30%; display: flex; flex-direction: column; align-items: center;">
      <img src="./images/qr.svg" style="width: 100%;"/>
      <div>uebelacker.dev</div>
    </div>
  </div>
</div>


---

<div class="newspaper">
  <div class="newspaper-rule-thick"></div>
  <div class="newspaper-articles">
    <div class="newspaper-article">
      <div class="newspaper-date">September 2025</div>
      <div class="newspaper-headline">Salesforce entlässt 4.000 Mitarbeiter und ersetzt sie durch KI-Agenten</div>
    </div>
    <div class="newspaper-divider"></div>
    <div class="newspaper-article">
      <div class="newspaper-date">Januar 2026</div>
      <div class="newspaper-headline">Anthropic-CEO prognostiziert: KI-Modelle ersetzen Softwareentwickler in 6–12 Monaten</div>
    </div>
    <div class="newspaper-divider"></div>
    <div class="newspaper-article">
      <div class="newspaper-date">März 2026</div>
      <div class="newspaper-headline">Atlassian entlässt jeden zehnten Mitarbeiter wegen KI</div>
    </div>
  </div>
  <div class="newspaper-rule-thick"></div>
</div>

---

<div class="newspaper">
  <div class="newspaper-rule-thick"></div>
  <div class="newspaper-articles">
    <div class="newspaper-article">
      <div class="newspaper-date">März 2026</div>
      <div class="newspaper-headline">OpenAI will Belegschaft bis 2026 fast verdoppeln</div>
    </div>
  </div>
  <div class="newspaper-rule-thick"></div>
</div>

---
layout: two-cols-header
---

# Unser Job ändert sich

<br/>

Diese zwei Dinge müsen wir nun machen:

::left::

### 1. Mit AI arbeiten 🛠️

Wir müssen **dranbleiben** und lernen, mit den neuen AI-Tools zu arbeiten – um produktiver zu werden und die Qualität unserer Arbeit zu steigern.

::right::

### 2. AI bauen 🚀

Wir müssen lernen, **selbst AI-Applikationen zu entwickeln** – um bereit zu sein, wenn Prozesse im Unternehmen mithilfe von AI automatisiert und verbessert werden sollen.

---
layout: two-cols-header
---

::left::

# Heutige Themen

<div style="padding-top: 20px;"></div>

## Theorie

<div class="emoji-list" style="padding-top: 10px; padding-bottom: 30px;">

* 🧠 Was sind LLMs, AI Agents und RAG?
* ☁️ Cloud vs. lokale Modelle

</div>

## Beispiele

<div class="emoji-list" style="padding-top: 10px;">

* 💬 Git Commit-Messages generieren
* 🗼 Lokalisierung endlich automatisieren
* 📬 E-Mail-Support mit RAG automatisieren

</div>

::right::

<img src="./images/topics.png" style="height: 76%; margin-left: 100px;"/>

---

# Was ist ein LLM?

Ein Large Language Model (LLM) ist eine Art von künstlicher Intelligenz, die darauf ausgelegt ist, menschenähnlichen Text zu verstehen, vorherzusagen und zu generieren.

<div class="center">
  <img src="./images/llm.svg" style="padding-top: 100px; width: 80%;"/>
</div>

---
layout: two-cols-header
---

# Frameworks

Open-Source-Frameworks für die Abstraktion von LLMs/APIs und die Entwicklung von AI Agenten.

<br/>

::left::

### 🦜 LangChain
* 🐍 Python, 🟨 JavaScript/TypeScript, ☕ Java (LangChain4j)
* https://langchain.com/

<br/>

### ▲ Vercel AI SDK
* TypeScript-first, Streaming & Structured Output via Zod
* https://ai-sdk.dev/

::right::

### 🤖 Agent Development Kit
* Neues Framework von Google
* 🐍 Python, 🔷 TypeScript, 🐹 Go, ☕ Java
* https://adk.dev/

<br/>

### ⚡ mastra
* TypeScript-first, vom Team hinter Gatsby (YC W25)
* Baut auf dem Vercel AI SDK auf
* https://mastra.ai/

---
layout: two-cols-header
---

# 💡 TIPP: Keep it short

**Je kleiner und präziser die Aufgabe, desto besser das Ergebnis.**

::left::

### ❌ Vermeiden

```text
"Schreib mir eine komplette Web-App mit Login, Dashboard 
und REST-API"
```

🫠 Zu viel auf einmal

- 🎯 LLM verliert den Fokus
- 🧊 Ergebnis ist oberflächlich
- 🔧 Schwer zu korrigieren

::right::

### ✅ Besser: Aufgabe aufteilen

```text
1. „Entwirf das Datenmodell für User + Rollen"
2. „Erstelle den Login-Endpoint mit JWT"
3. „Baue die Dashboard-Komponente"
```

🎯 Ein Task = ein klares Ziel

- ✨ Ergebnis ist fokussiert und präzise
- 🐛 Fehler sind sofort erkennbar
- 🔄 Iteratives Arbeiten möglich

::bottom::

> 🧠 **Kleine Tasks → mehr Kontrolle → bessere Ergebnisse**

---
layout: two-cols-header
---

# Lokale Large Language Models

::left::

## ✅ Vorteile
* Datenschutz
* Geringe Kosten
* Unabhängigkeit
* Kein Internet

## 😭 Nachteile
* Langsamer
* Mehr Halluzinationen
* Unzuverlässiger
* Hardwarekosten

::right::

## 🛠️ Tools
* https://ollama.com/
* https://lmstudio.ai/
* https://llama.cpp/

## 🧠 Modelle
* Llama (Meta)
* Qwen (Alibaba)
* DeepSeek
* Mistral
* Gemma (Google)
* Phi (Microsoft)

---

# Hardware-Anforderungen für Q4-Modelle

| Modell-Grösse | Modell-Speicher | Mac (Unified Memory) | Intel/x86 (RAM + GPU VRAM)        |
|---------------|-----------------|----------------------|-----------------------------------|
| 8B            | ~5 GB           | 16 GB                | 16 GB RAM + 8–12 GB VRAM          |
| 13B           | ~8 GB           | 24 GB                | 16 GB RAM + 12 GB VRAM            |
| 34B           | ~20 GB          | 36–48 GB             | 32 GB RAM + 24 GB VRAM (RTX 4090) |
| 70B           | ~40 GB          | 64 GB                | 64 GB RAM + 2× 24 GB VRAM         |

**8B, 13B, 32B, 70B**: B = Billion (Milliarde) Parameter — Anzahl der gelernten Gewichte im Modell.

**Q2, Q4, Q6, FP16**: Q2/Q4/Q6 stehen für die Quantisierung mit 2/4/6 Bits pro Parameter; FP16 ist das unquantisierte Original mit 16-Bit-Fliesskommazahlen.


---

# Was ist ein AI Agent?

Ein AI Agent ist ein System, das ein Ziel übernimmt, ein Large Language Model (LLM) und Tools verwendet und so lange iteriert, bis das Ziel erreicht ist.

<img src="./images/agents.svg" style="padding-bottom: 20px;"/>

---
layout: two-cols-header
---

# LLM Observability

Was zur Hölle macht mein AI Agent?

<br/>

::left::

### LangSmith · Kommerziell 
 
- Sprachen: Python, JS/TS, Java
- [smith.langchain.com](https://smith.langchain.com)

<br/>

### Langfuse · Open Source
  
- Sprachen: Python, JS/TS, Java*, OTLP
- [langfuse.com](https://langfuse.com)

<br/>

### Helicone · Open Source
 
- Sprachen: Alle (Proxy), Python, JS/TS
- [helicone.ai](https://helicone.ai)


::right::

<img src="./images/observability.png" style="height: 80%; margin-left: 100px; margin-top: -80px;"/>


---

# Was ist RAG?

RAG, oder Retrieval-Augmented Generation, ist eine KI-Technik, die die Fähigkeit eines Large Language Models zur Textgenerierung mit einer externen Wissensbasis, wie einer Datenbank oder einem Dokumentenset, kombiniert, um genauere und relevantere Antworten zu erzeugen.

<img src="./images/rag.svg" style="padding-bottom: 20px;"/>


---
layout: two-cols-header
---

# 💡 TIPP: Prompts isoliert testbar machen

Prompt-Engineering ist Experimentieren. Je schneller du einen einzelnen Prompt ausführen und bewerten kannst, desto schneller wird er gut. Ohne Testbarkeit debuggst du blind.

::left::
### 🗄️ Cache in der Entwicklung
Gleicher Input → gleiche Response, kein API-Call. Spart Zeit & Tokens, macht Runs deterministisch.

::right::
### 🎯 Prompt Integration Tests 
Pro Prompt ein isolierter integration Test der mit dem Prompt das LLM aufruft.

::bottom::

<img src="./images/test_prompts.svg" />


---
layout: fact
---

# Vielen Dank!
