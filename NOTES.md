# Nachrichten

- Schlagzeilen rund um AI verunsichern
- OpenAI verdoppelt Belegschaft

# Job ändert sich

- AI Tools einsetzen
- AI Tools erstellen/Prozesse mit AI automatisieren/AI in vorhandene Applikationen einbauen

# Was ist ein LLM?

- Will nicht im Detail erklären, weiss selber nicht wie das funktioniert
- Wenn Training abgeschlossen ist es statisch und kann nicht mehr dazu lernen
- Man gibt dem Model einen Input und bekommt einen Output, fertig
- Beispiel Chat: alle vorherigen Nachrichten werden immer wieder mitgeschickt

# Frameworks

- APIs können natürlich direkt genutzt werden
- Abstraction, vereinfacht den Wechsel zwischen Anbietern
- Bieten neben Abstraktion zur API auch die Implementierung/Abstraktion anderer Patterns wie Agents oder RAG
- Nutze Langchain das bekannteste

# AI Agents

- Kotzrein: Result: https://github.com/uebelack/rpi-frami
- Tools: https://docs.langchain.com/oss/javascript/langchain/tools
- Was genau ist passiert? -> https://eu.smith.langchain.com/

# Prompts

- Beispiel Clode Code, source code wurde geleaked sehr gut um zu sehen wie anthropic probleme löst
  -> Errorhandling, Context compacting,
  -> Between sessions, Claude Code spawns a forked subagent whose sole job is memory consolidation
  https://github.com/Piebald-AI/claude-code-system-prompts
  https://www.dbreunig.com/2026/04/04/how-claude-code-builds-a-system-prompt.html
