/**
 * suggestions.js — Renders quick-reply suggestion pills.
 */

const SuggestionsBar = {
  _container: null,
  _onSelect: null,

  init(containerEl, onSelectCallback) {
    this._container = containerEl;
    this._onSelect = onSelectCallback;
  },

  /** Show suggestion pills for a given topic. */
  show(topic) {
    if (!this._container) return;

    const items = TOPIC_SUGGESTIONS[topic] || TOPIC_SUGGESTIONS['general'];
    // Show 4 random suggestions to keep it fresh
    const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 4);

    this._container.innerHTML = '';
    shuffled.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'sug-pill';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        if (this._onSelect) this._onSelect(text);
      });
      this._container.appendChild(btn);
    });
  },

  /** Clear suggestion pills. */
  clear() {
    if (this._container) this._container.innerHTML = '';
  }
};
