# KI ändert unsren Job

- Wer nutzt von euch täglich Coding Assistenten wie Claude Code, Github Copilot, Cursor etc.?
- Wer hat schon LLM in Software eingebunden? LLM gesetützte Software entwickelt?

# Was können wir mit LLM's machen?

- Seit OpenAI vor mehr als 3 Jahren veröffentlich hat, hat sich viel geändert
- Ich bin begeistert, was wir mit LLM's machen können und wie es unsere Arbeit verändert hat
- Gleichzeitig find ich den Hype darum insbesondere in den USA übertrieben
- Aus meiner Sicht sind die Erwartungen so hoch, dass viele davon mit LLM nicht erfüllt werden können
- Aber wir können nun Sachen machen, die wir früher nicht machen konnten
- Wir können mit unstrukturierten Daten arbeiten, Text analysieren und Text generieren
- z.B. Automatisch auf Mails antworten
- Unstrukturierte Daten einfach strukturieren

# Heutige Themen

- Seitdem die API von OpenAI zur Verfügung steht, beschäftige ich mit dem Thema, wie LLM für eigene Software nutzen kann
- Probiere vieles aus und so bin ich zur Idee von diesem Vortrag gekommen. Meine Idee war es selber LLM gestützte Tools für meinen Alltag zu bauen um mir die Arbeit zu erleichtern. Davon zeige Ich Euch Heute die drei Beispiele.

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

- Viel was das LLM nicht machen soll
- Beispiel Clode Code, source code wurde geleaked sehr gut um zu sehen wie anthropic probleme löst
  -> Errorhandling, Context compacting,
  -> Between sessions, Claude Code spawns a forked subagent whose sole job is memory consolidation
  https://github.com/Piebald-AI/claude-code-system-prompts
  https://www.dbreunig.com/2026/04/04/how-claude-code-builds-a-system-prompt.html
