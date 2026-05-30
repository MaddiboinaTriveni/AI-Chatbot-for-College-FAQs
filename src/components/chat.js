/**
 * chat.js — Core chat engine.
 * Manages conversation state, API calls, and rendering.
 */
import { COLLEGES } from '../data/colleges.js';
export const Chat = (() => {

let state = {
  history: [],
  apiHistory: [],
  currentTopic: 'general',
  currentLanguage: 'en',
  currentCollege: 'sacet',
  isLoading: false,
  questionCount: 0
};

  

  const LANGUAGE_INSTRUCTIONS = {
    en: 'Respond in English.',
    hi: 'हिंदी में उत्तर दें। (Respond in Hindi)',
    te: 'తెలుగులో సమాధానం ఇవ్వండి. (Respond in Telugu)',
    ta: 'தமிழில் பதிலளிக்கவும். (Respond in Tamil)',
    fr: 'Répondez en français. (Respond in French)',
    de: 'Antworten Sie auf Deutsch. (Respond in German)'
  };

  // ── DOM refs ────────────────────────────────────────────────────────────
  let _messagesArea = null;
  let _input = null;
  let _sendBtn = null;
  let _questionCountEl = null;

  // ── Public API ──────────────────────────────────────────────────────────
  return {

    init({ messagesArea, input, sendBtn, questionCountEl }) {
      _messagesArea = messagesArea;
      _input = input;
      _sendBtn = sendBtn;
      _questionCountEl = questionCountEl;

      // Restore persisted state
      state.history = Storage.loadHistory();
      state.currentLanguage = Storage.loadPreference(Storage.KEYS.LANGUAGE, 'en');
      state.currentTopic    = Storage.loadPreference(Storage.KEYS.TOPIC, 'general');
      state.questionCount   = Storage.getQuestionCount();

      this._updateCountDisplay();
    },

    getState: () => state,

    setLanguage(lang) {
      state.currentLanguage = lang;
      Storage.savePreference(Storage.KEYS.LANGUAGE, lang);
    },

    setTopic(topic) {
      state.currentTopic = topic;
      Storage.savePreference(Storage.KEYS.TOPIC, topic);
    },
async send(text) {

  if (!text || state.isLoading) return;

  const trimmed = text.trim();

  if (!trimmed) return;

  // User Message
  const timestamp = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const userEl = Message.create(
    'user',
    trimmed,
    timestamp
  );

  _messagesArea.appendChild(userEl);

  this._scroll();

  // Save User History
  state.history.push({
    role: 'user',
    content: trimmed,
    timestamp
  });

  state.questionCount =
    Storage.incrementQuestionCount();

  this._updateCountDisplay();

  Storage.saveHistory(state.history);

  // Loading
  state.isLoading = true;

  this._setInputEnabled(false);

  TypingIndicator.show(_messagesArea);

  this._scroll();

  // Language
  const langInstruction =
    LANGUAGE_INSTRUCTIONS[state.currentLanguage]
    || LANGUAGE_INSTRUCTIONS.en;

  // Selected College
  const selectedCollege =
    COLLEGES[state.currentCollege];

  // Dynamic Prompt
 const systemPrompt = `
You are EduBot for ${selectedCollege.name}.

College Information:
${JSON.stringify(selectedCollege)}

${langInstruction}

Answer student questions accurately.
Keep responses short and friendly.
Use bullet points when needed.
`;

  try {

    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',

          'Authorization':
            'Bearer YOUR_API_KEY'
        },

        body: JSON.stringify({

          model: 'llama-3.3-70b-versatile',

          temperature: 0.5,

          top_p: 0.8,

          max_tokens: 120,

          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: trimmed
            }
          ]
        })
      }
    );

    if (!response.ok) {

      const errText =
        await response.text();

      console.log(errText);

      throw new Error(
        `API error: ${response.status}`
      );
    }

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content
      || 'Sorry, no response generated.';

    TypingIndicator.hide();

    const botTimestamp =
      new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });

    const botEl =
      Message.create(
        'bot',
        reply,
        botTimestamp
      );

    _messagesArea.appendChild(botEl);

    this._scroll();

    // Save Bot History
    state.history.push({
      role: 'assistant',
      content: reply,
      timestamp: botTimestamp
    });

    Storage.saveHistory(state.history);

  } catch (err) {

    TypingIndicator.hide();

    console.error(
      'Chat API error:',
      err
    );

    const errMsg =
      'AI service temporarily busy. Please try again in a few seconds.';

    const errEl = Message.create(
      'bot',
      errMsg,
      new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    );

    _messagesArea.appendChild(errEl);

    this._scroll();

  } finally {

    state.isLoading = false;

    this._setInputEnabled(true);

    _input && _input.focus();
}


    },

    clear() {
      state.history = [];
      state.apiHistory = [];
      Storage.clearHistory();
      _messagesArea.innerHTML = '';
      // Re-render welcome screen
      if (window.App) window.App.renderWelcome();
    },

    // ── Private helpers ──────────────────────────────────────────────────

    _scroll() {
      if (_messagesArea) {
        setTimeout(() => {
          _messagesArea.scrollTop = _messagesArea.scrollHeight;
        }, 50);
      }
    },

    _setInputEnabled(enabled) {
      if (_input) _input.disabled = !enabled;
      if (_sendBtn) _sendBtn.disabled = !enabled;
    },

    _updateCountDisplay() {
      if (_questionCountEl) {
        _questionCountEl.textContent = state.questionCount;
      }
    }
  };

})();
