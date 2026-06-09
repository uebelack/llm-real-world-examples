# Vortrag – Stichpunkte

> LLMs, KI-Agenten und RAG – Praxisbeispiele aus dem Entwickleralltag

---

## KI ändert unseren Job

- Seit OpenAI vor mehr als 3 Jahren ChatGPT veröffentlicht hat, hat sich in unserem Job viel verändert
- Begeistert, was wir heute können und wie es die Arbeit verändert hat
- Wer von euch nutzt täglich einen Coding-Assistenten (Claude Code, GitHub Copilot, Cursor …)?
- Wer weigert sich und macht (noch) nichts mit KI?
- Wer hat selbst ein LLM in eigene Software eingebunden / LLM-gestützte Software gebaut?
- → Genau darum geht es heute: nicht KI-Tools zum Entwickeln, sondern LLMs **in** die eigene Software integrieren

## Heutige Themen

- Seit der ersten OpenAI-API beschäftigt mich: Wie nutze ich LLMs für eigene Software (Features, User Experience verbessern)?
- Idee des Vortrags: selbst LLM-gestützte Tools für den Alltag bauen, um mir die Arbeit zu erleichtern
- Drei Beispiele: **Lokalisierung automatisieren**, **Commit-Messages generieren**, **Mail-Support automatisieren**
- Wir sehen vor allem Code, wenig Theorie – nur 3 Theoriefolien (LLM / Agenten / RAG)
- Zwischendrin: kurzer Abstecher zu lokalen Modellen

## Was ist ein LLM?

- Will es nicht im Detail erklären – andere können das besser, und das Innere kenne _ich_ auch nicht im Detail
- **Wichtigster Punkt** (erlebe ich ständig bei Kollegen und Laien): LLMs werden trainiert, danach sind sie **statisch** – sie lernen nichts mehr dazu
- Man gibt Input rein, bekommt Output – fertig. Beim nächsten Aufruf ist die vorherige Anfrage «vergessen»
- Chat-Trick: Es _wirkt_, als merke sich das LLM alles. In Wahrheit werden bei jeder Anfrage **alle bisherigen Nachrichten wieder mitgeschickt** → daraus generiert es die nächste Antwort
- Wichtig zu verstehen, um mit LLMs zu arbeiten

---

## Beispiel 1: Lokalisierung automatisieren

**Pain Point**

- Schweiz hat 4 Landessprachen
- Noch nie ein Projekt ohne Mehrsprachigkeit
- Nervt wie Encoding: Story «Übersetzungen wurden beim Büro angefordert, kommen nach» → Story nicht abschliessbar
- Später: Übersetzungen aus komischen Excel-Sheets einpflegen, Variablen mit-übersetzt, Sonderzeichen kaputt → jede Zeile einzeln korrigieren
- Idee: Tool, das das voll automatisiert – LLMs sind dafür inzwischen gut genug (nicht perfekt, aber für die meiste Software ausreichend)

**Demo**

- Zwei Files: `en.json` (gefüllt, inkl. 3 JS-Witze) und `de.json` (leer)
- Bestehender Code lädt beide, findet fehlende deutsche Übersetzungen, ruft pro fehlendem Key `translate()` auf
- LLM ansprechen über LangChain + `ChatAnthropic`, Modell `claude-sonnet-4-6` (Hinweis: aktuell wäre Opus 4.8)
- Aufruf mit einem **Array von Nachrichten** (am Ende wird alles zu einem Prompt zusammengefasst)
- **Drei Rollen**: `system` (Info vom System), `user` (Eingabe des Anwenders), `assistant`/AI (Antwort des LLM)
- System-Prompt: «You are a helpful assistant that translates text from English to German …»
- Wichtig: «Return only the translated text, no other text» – sonst quasselt das LLM («Klar, hier ist deine Übersetzung … kann ich noch was tun?»)
- Ergebnis zeigen → sieht gut aus

**Sicherheits-Hinweis (Rollentrennung)**

- User-Input in die `user`-Rolle, Anweisungen in `system`
- → **reduziert / erschwert** Prompt Injection (z.B. «Vergiss alle Anweisungen …»), weil System höher gewichtet wird
- ⚠️ nicht sagen «verhindert» – Rollentrennung schliesst Prompt Injection nicht aus, macht sie nur unwahrscheinlicher

## Frameworks (kurz)

- APIs lassen sich direkt nutzen; alle Anbieter (OpenAI, Anthropic …) bieten APIs + Libraries (JS, Java, …)
- Empfehlung: anbieterübergreifendes Framework als **Abstraktion** → leichter zwischen Modellen wechseln
- Bietet ausser API-Abstraktion auch fertige Patterns: Agents, RAG, Tools …
- Ich nutze von Anfang an **LangChain** (das bekannteste); Alternativen gibt es
- Alle Links im GitHub-Repo

## Lokale Modelle (Abstecher)

- Kontext: Wer bei einer Bank arbeitet, darf oft kein Cloud-LLM nutzen (Kundendaten dürfen z.B. nicht in die Cloud)
- Lösung: lokale LLMs – nicht so gut wie Cloud, aber auf z.B. einem Mac lokal lauffähig
- Tool: **Ollama** (passt mir am besten, muss nicht das Beste sein) – einfacher Install-Befehl, Modell-Katalog
- `ollama run <modell>` → lädt das Modell bei Bedarf herunter
- LangChain hat Adapter (`ChatOllama`); Modell tauschen, Rest bleibt gleich
- Beispiel: **Qwen 3.5** (Alibaba, open weights; neuestes wäre Qwen 3.6)
  - Reasoning-Modell → `think: false` setzen, sonst «überlegt» es lange (für die Demo zu langsam)
- Läuft lokal langsamer, aber **es gehen keine Daten raus**
- Ergebnis etwas schlechter (englische Terms diesmal übersetzt), aber funktioniert
- Bonus-Witz: praktisch auch ohne Netz, z.B. in der Deutschen Bahn

**Quantisierung (nur falls Zeit / Backup)**

- Modelle in verschiedenen Grössen; z.B. ~9 **Milliarden** Parameter ≈ 6,6 GB
- Original-Gewichte typ. **16 Bit** (FP16/BF16) → werden auf 8/4 Bit quantisiert
- Folge: kleiner, etwas weniger «Wissen», funktioniert trotzdem gut

**Hardware-Ausblick (max. 1 Satz)**

- Unified Memory (CPU+GPU teilen Speicher) bisher v.a. Apple
- An der Computex 2026 vorgestellt: Nvidia N1x / RTX Spark (Arm) im Surface Laptop Ultra, bis 128 GB unified
- AMD hat das mit Ryzen AI Max schon; → lokale Modelle werden breiter laufen

## Babeli (mein Tool)

- Habe das veröffentlicht – könnt ihr nutzen oder als Vorlage anschauen
- **babeli** (JavaScript/CLI, in den Build-Prozess einbindbar, mehrere Formate)
- **babeli4j** (Java, Maven- + Gradle-Plugin)
- Namens-Wortspiel: Turmbau zu Babel → «Babeli» (Basel/Schweiz)
- Translation-Service zeigen: deutlich längerer Prompt
  - «You are a professional translation assistant … your task is to translate …»
  - Viele **Negativ-Anweisungen**: «übersetze die Variablen nicht», «mach das nicht …»
- **Prompt-Engineering-Erkenntnis**: man muss vor allem sagen, was man _nicht_ will → iterativ aus den Fehlern heraus entsteht der finale Prompt
- Problem unterwegs: Begriffe wurden uneinheitlich übersetzt (LLM kennt den Rest der Datei nicht)
  - Ganze Datei mitschicken = viele Tokens = Geld → nicht gemacht
  - Erst aufwendigen, automatisch aktualisierten Glossar gebaut → zu kompliziert
  - Einfachere Lösung, Richtung RAG: zu jedem String die **ähnlichsten Strings** der Datei finden und als Beispiele in den Prompt geben
  - Ähnlichkeit via **Jaro-Winkler** (von Claude implementiert), Top-N (~25) mitgeben
- → Ergebnis deutlich besser. Kernbotschaft: **LLM-Einschränkungen lassen sich mit kleinen Tricks umgehen**

---

## KI-Agenten

**Definition**

- Ein System, das ein **Ziel** bekommt und mithilfe eines LLM + **Tools** selbst entscheidet, welche Schritte nötig sind, und so lange **iteriert**, bis das Ziel erreicht ist
- Viele Definitionen im Umlauf – das ist meine Arbeitsdefinition, muss nicht «die richtige» sein
- Tools = z.B. APIs. Beispiel Wetter-API: «Was ist morgen das Wetter in Mannheim?» → LLM weiss es nicht → ruft Tool auf → nutzt Ergebnis
- **Loop**: Tools mehrfach aufrufbar (z.B. Browser/Web), bis das LLM sagt «gute Antwort» → Abbruch, Ergebnis raus

**Beispiel: Commit-Messages**

- Pain Point: schreibe gern Code, ungern Text – Commit-Message nervt
- Altes Skript «kotzrein»: zufälliges Emoji + `fortune` + `git add`/`commit` (nur privat, nie professionell!)
- Problem: nutzlose History, beim Zurücksuchen chancenlos → mit LLM verbessern
- Neu: Agent, der **selbst das Diff erstellt** (statt ihm den Diff zu übergeben)
- LangChain `createAgent`: Modell + mindestens ein Tool übergeben
- Idee: Agent bekommt **kompletten Zugriff auf die Maschine**
  - Tool `executeCommand` (Library `execa`): beliebiges Kommando ausführen, Ergebnis zurück
  - **Wichtig 1**: Output kann riesig sein → Kontext zumüllen → bei > 10'000 Zeichen abschneiden
  - **Wichtig 2**: Fehler nicht nur loggen, sondern die Fehlerbeschreibung **ans LLM zurückgeben**
  - `tool()` von LangChain: Methode + Beschreibung (Name, Description, Parameter → hier: `command`)
- Aufruf: «Create commit message for the current directory. Use executeCommand to get the diff …»
- Ablauf: LLM ↔ Tool hin und her (`git status`, `git diff`, `git diff --cached` …), bis das LLM die Commit-Message liefert → nur die letzte Nachricht ausgeben
- Demo: Test im babeli-Repo (sinnloses «Feature»: Nachrichten als QR-Code speichern) → Agent erzeugt Diffs → brauchbare Commit-Message (intern für Entwickler, geht an keinen Kunden)

**Observability: LangSmith**

- Zeigt, was im Hintergrund passiert (Kommunikation mit dem LLM)
- Von LangChain, läuft in der Cloud (kommerziell), aber sehr viel gratis nutzbar; Open-Source-Alternativen existieren (z.B. Langfuse)
- Session ansehen: Eingabe → LLM-Antwort mit Tool-Aufrufen → Tool-Ergebnis zurück → … → finale Commit-Message
- Hilft enorm beim Debuggen; auch im Betrieb nutzbar (neue Prompts testen, Insights)
- Tool veröffentlicht (Agent-CLI) – anschauen ja, produktiv nutzen eher nicht
- Alternative: Skill im Coding-Assistant. Aber: eigenes Tool = kleinere, präzisere Prompts, bessere Kontrolle, bessere Ergebnisse

---

## RAG (Retrieval Augmented Generation)

**Definition**

- KI-Technik, die die Textgenerierung eines LLM mit einer **externen Wissensbasis** (DB / Dokumente) kombiniert → genauere, relevantere Antworten
- Rückbezug: LLM ist statisch, lernt nicht dazu. Eigenes Modell trainieren = teuer/kompliziert → mache ich nicht
- Man will das LLM aber mit **eigenen, spezifischen Infos** arbeiten lassen
- Beispiel: Freund mit Webshop will Beratungsagent, der alle Artikel kennt → nicht trainieren, sondern **in den Kontext packen**

**Context**

- Was wir ans LLM schicken, heisst **Context** – und der ist beschränkt
- Aktuell typ. ~200k Tokens, Opus 4.8 bis zu 1 Mio → ein 500-Seiten-Buch passt schon rein
- Trotzdem beschränkt: ganzes Firmen-Wiki / 10 Jahre Mailverkehr passt nicht

**Wie es funktioniert**

- Wir indizieren alles in einer **Vektordatenbank** (Vektor-DB, weil sie Ähnlichkeitssuche kann)
- Pro Dokument speichern wir Text + eine Vektor-Repräsentation, erzeugt mit einem **Embedding-Modell**
- Anfrage/Prompt ebenfalls per Embedding-Modell in einen Vektor wandeln → Ähnlichkeitssuche in der Vektor-DB
- Die ähnlichsten Texte landen **im Context, vor dem Prompt** (nicht alle Daten – nur die besten, die reinpassen → ausprobieren wie viele)
- Veranschaulichung: «supergeiles Mountainbike» → findet die passenden Artikel im Shop

**Vorteil ggü. Modell erweitern**

- Einfacher und spezifischer: eingespeistes Wissen ginge im riesigen Gesamtwissen unter
- Kontext wird **höher gewichtet** → die richtige Info kommt zum Zug

**Tricks**

- Prompt enthält evtl. nicht die Wörter der Antwort → erst das LLM die Frage beantworten lassen und **mit dieser (hypothetischen) Antwort** in der Vektor-DB suchen (HyDE)
- Zusätzlich Volltext-/Hybridsuche möglich → ausprobieren, hängt vom Use Case ab

**Beispiel: Mail-Support (Briefe-App)**

- Im App Store eine App zum Briefeschreiben (kleines Hobby)
- Nutzer schreiben Support-Mails, viele «Cancel jetzt sofort» → ich antworte immer ruhig/freundlich, würde es aber gern automatisieren
- **Structured Output**: Schema mitgeben → JSON zurück (z.B. `subject` + `message`) statt Fliesstext
  - Tipp: **Retry einbauen** – manchmal liefert das LLM kein valides JSON
- Mit Vektor-DB: alte Mails **inkl. Antworten** indizieren → zur neuen Mail die ähnlichste finden → perfekt zugeschnittene Antwort, die meinen Stil/Inhalt trifft

---

## Tipps zum Schluss

- **Vertraue nie blind** dem LLM-/RAG-Output – testen, besonders beim Modellwechsel
- Prompts **so kurz wie möglich**, lieber kleine Teile; nicht im Prompt «programmieren» – `if/then/else` gehört in Code
- Prompts **einzeln testbar** machen (Caches / Integrationstests) – sonst dauert das Iterieren ewig
- **Structured Output + Retry** für strukturierte Antworten
- **Dran bleiben** – das Feld bewegt sich schnell; gerade für uns Entwickler wichtig
- Material & alle Links im GitHub-Repo

---
