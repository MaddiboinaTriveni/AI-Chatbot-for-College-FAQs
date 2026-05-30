/**
 * typing.js — Animated typing indicator component.
 */

const TypingIndicator = {
  _element: null,

  /** Append the typing indicator to a container. */
  show(container) {
    this.hide(); // remove any existing one

    const row = document.createElement('div');
    row.className = 'msg-row';
    row.id = 'typingIndicator';
    row.setAttribute('aria-label', 'EduBot is typing');
    row.setAttribute('aria-live', 'polite');

    const avatarWrap = document.createElement('div');
    avatarWrap.className = 'msg-avatar-wrap bot';
    avatarWrap.setAttribute('aria-hidden', 'true');
    avatarWrap.innerHTML = '<i class="ti ti-robot"></i>';

    const bubble = document.createElement('div');
    bubble.className = 'bubble bot typing-bubble';
    bubble.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;

    row.appendChild(avatarWrap);
    row.appendChild(bubble);

    container.appendChild(row);
    container.scrollTop = container.scrollHeight;

    this._element = row;
  },

  /** Remove the typing indicator. */
  hide() {
    const existing = document.getElementById('typingIndicator');
    if (existing) existing.remove();
    this._element = null;
  }
};
