/**
 * storage.js — Persist chat history and preferences in localStorage.
 */

const Storage = {
  KEYS: {
    HISTORY: 'edubot_history',
    LANGUAGE: 'edubot_language',
    TOPIC:    'edubot_topic',
    COUNT:    'edubot_question_count'
  },

  saveHistory(history) {
    try {
      // Keep only the last 50 messages to avoid storage bloat
      const trimmed = history.slice(-50);
      localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(trimmed));
    } catch (e) {
      console.warn('Could not save chat history:', e);
    }
  },

  loadHistory() {
    try {
      const raw = localStorage.getItem(this.KEYS.HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  clearHistory() {
    localStorage.removeItem(this.KEYS.HISTORY);
  },

  savePreference(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  },

  loadPreference(key, defaultValue = null) {
    try { return localStorage.getItem(key) || defaultValue; } catch (e) { return defaultValue; }
  },

  incrementQuestionCount() {
    const current = parseInt(this.loadPreference(this.KEYS.COUNT, '0'), 10);
    const next = current + 1;
    this.savePreference(this.KEYS.COUNT, next.toString());
    return next;
  },

  getQuestionCount() {
    return parseInt(this.loadPreference(this.KEYS.COUNT, '0'), 10);
  }
};
