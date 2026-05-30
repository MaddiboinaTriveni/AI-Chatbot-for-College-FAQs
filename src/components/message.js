/**
 * message.js — Factory for creating and rendering chat message elements.
 */

const Message = {
  /**
   * Create a message DOM element.
   * @param {'user'|'bot'} role
   * @param {string} content - Raw text (will be markdown-rendered for bot)
   * @param {string} timestamp
   * @returns {HTMLElement}
   */
  create(role, content, timestamp = '') {
    const row = document.createElement('div');
    row.className = `msg-row ${role}`;
    row.setAttribute('role', 'article');
    row.setAttribute('aria-label', `${role === 'user' ? 'You' : 'EduBot'} said`);

    const avatarWrap = document.createElement('div');
    avatarWrap.className = `msg-avatar-wrap ${role === 'user' ? 'user' : 'bot'}`;
    avatarWrap.setAttribute('aria-hidden', 'true');
    avatarWrap.innerHTML = role === 'user'
      ? '<i class="ti ti-user"></i>'
      : '<i class="ti ti-robot"></i>';

    const contentWrap = document.createElement('div');
    contentWrap.className = 'msg-content';

    const bubble = document.createElement('div');
    bubble.className = `bubble ${role === 'user' ? 'user' : 'bot'}`;

    if (role === 'bot') {
      bubble.innerHTML = Markdown.render(content);
    } else {
      bubble.textContent = content;
    }

    const meta = document.createElement('div');
    meta.className = 'msg-meta';
    meta.textContent = timestamp || Message._formatTime(new Date());

    contentWrap.appendChild(bubble);
    contentWrap.appendChild(meta);

    row.appendChild(avatarWrap);
    row.appendChild(contentWrap);

    return row;
  },

  /**
   * Update the content of an existing bubble (used for streaming updates).
   * @param {HTMLElement} row
   * @param {string} content
   */
  updateContent(row, content) {
    const bubble = row.querySelector('.bubble.bot');
    if (bubble) bubble.innerHTML = Markdown.render(content);
  },

  _formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
};
