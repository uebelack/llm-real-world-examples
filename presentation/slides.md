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

# 💡 TIPP: Keep it short

**Je kleiner und präziser die Aufgabe, desto besser das Ergebnis.**

<br/>

<div class="grid grid-cols-2 gap-8">
<div>

### ❌ Vermeiden

```text
"Schreib mir eine komplette Web-App mit Login, Dashboard 
und REST-API"
```

🫠 Zu viel auf einmal

- 🎯 LLM verliert den Fokus
- 🧊 Ergebnis ist oberflächlich
- 🔧 Schwer zu korrigieren

</div>
<div>

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

</div>
</div>

<br/>

> 🧠 **Kleine Tasks → mehr Kontrolle → bessere Ergebnisse**


---

# Was ist ein AI Agent?

Ein AI Agent ist ein System, das ein Ziel übernimmt, ein Large Language Model (LLM) und Tools verwendet und so lange iteriert, bis das Ziel erreicht ist.

<img src="./images/agents.svg" style="padding-bottom: 20px;"/>

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
layout: two-cols-header
---

# 🦜 LangChain.js & LangGraph.js

::left::

### LangChain.js

Ein Framework zum Erstellen von LLM-basierten Anwendungen.

<div class="emoji-list">

* 🧠 Mehrere LLM-Provider
* 📦 Document und Vector Stores
* 🛠️ Externe Tools und APIs

</div>

::right::

### LangGraph.js

Ein Framework zum Erstellen komplexer, zustandsbehafteter AI-Agent-Workflows mit fortgeschrittener Orchestration.

<div class="emoji-list">

* 🗃️ **State Management** - Persistenter Speicher
* 🔵 **Nodes** - Workflow-Komponenten
* ➡️ **Edges** - Bedingte Logik

</div>

::bottom::

---
layout: fact
---

# Vielen Dank!
