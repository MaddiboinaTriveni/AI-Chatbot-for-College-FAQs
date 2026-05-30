# Architecture & Design Notes

## System Overview

EduBot is a **client-side single-page application** that communicates directly with the Anthropic Claude API. There is no backend server (for simplicity), but the design makes it easy to add one.

---

## Component Architecture

```
index.html
    └── App (main.js)
         ├── Chat (chat.js)          ← Core engine, API, state
         ├── Message (message.js)    ← DOM factory for bubbles
         ├── TypingIndicator         ← Animated dots
         ├── SuggestionsBar          ← Follow-up pills
         ├── VoiceInput (voice.js)   ← Web Speech API
         ├── ChatExport (export.js)  ← .txt/.json download
         └── Storage (storage.js)    ← localStorage wrapper
```

---

## Data Flow

```
1. User inputs text or speaks → voice.js transcribes → chatInput populated
2. App.sendMessage() called → chat.js.send(text)
3. chat.js builds system prompt = SYSTEM_PROMPT_BASE + college FAQ JSON + language instruction
4. API call: POST /v1/messages with full conversation history (last 20 turns)
5. Response streamed → TypingIndicator removed → Message.create('bot', reply) appended
6. History saved to localStorage via Storage.saveHistory()
7. SuggestionsBar.show(currentTopic) renders follow-up chips
```

---

## Prompt Engineering

The system prompt uses three layers:

1. **Role definition** — EduBot's persona and scope
2. **Knowledge base** — Entire `COLLEGE_FAQ_DATA` serialised as JSON
3. **Response guidelines** — Tone, format, length, fallback behaviour
4. **Language instruction** — Injected per user selection
5. **Topic context** — Current sidebar topic to bias the response

This "knowledge-stuffed prompt" approach (a lightweight form of RAG) ensures the model answers from institutional data rather than hallucinating.

---

## State Management

State is held in a plain object inside `chat.js` (IIFE module pattern):

```js
state = {
  history: [],       // Full history with timestamps (for localStorage)
  apiHistory: [],    // Stripped history for API (no timestamps)
  currentTopic:      // Active sidebar topic
  currentLanguage:   // Selected language code
  isLoading:         // Prevents double-sends
  questionCount:     // Lifetime counter shown in sidebar
}
```

---

## Security Considerations

| Risk | Mitigation |
|---|---|
| API key exposed in client | Use a backend proxy in production |
| XSS via AI-generated HTML | `Markdown.render()` escapes HTML before parsing |
| localStorage data leakage | Only conversation text is stored, no PII |
| Prompt injection | System prompt is server-side in production setup |

---

## Extending the Knowledge Base

To add new FAQ data:

1. Open `src/data/faqs.js`
2. Add new keys to `COLLEGE_FAQ_DATA`
3. Add matching suggestions in `src/data/suggestions.js`
4. Add a new nav button in `index.html` with a `data-topic` attribute
5. The system prompt automatically includes all data — no other changes needed
