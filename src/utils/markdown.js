/**
 * markdown.js — Lightweight markdown-to-HTML renderer for chat bubbles.
 * Handles bold, italic, inline code, lists, and line breaks.
 */

const Markdown = {
  /**
   * Render a markdown string to safe HTML.
   * @param {string} text
   * @returns {string} HTML string
   */
  render(text) {
    if (!text) return '';

    let html = this._escapeHtml(text);

    // Bold: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic: *text* or _text_
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');

    // Inline code: `code`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Unordered lists: lines starting with - or •
    html = this._renderLists(html);

    // Paragraphs: double newlines
    html = html.replace(/\n{2,}/g, '</p><p>');

    // Single line breaks
    html = html.replace(/\n/g, '<br>');

    return `<p>${html}</p>`;
  },

  _renderLists(html) {
    const lines = html.split('\n');
    const result = [];
    let inList = false;

    for (const line of lines) {
      const listMatch = line.match(/^[\-•]\s+(.+)/);
      const numberedMatch = line.match(/^\d+\.\s+(.+)/);

      if (listMatch) {
        if (!inList) { result.push('<ul>'); inList = 'ul'; }
        result.push(`<li>${listMatch[1]}</li>`);
      } else if (numberedMatch) {
        if (!inList) { result.push('<ol>'); inList = 'ol'; }
        result.push(`<li>${numberedMatch[1]}</li>`);
      } else {
        if (inList) { result.push(`</${inList}>`); inList = false; }
        result.push(line);
      }
    }

    if (inList) result.push(`</${inList}>`);
    return result.join('\n');
  },

  _escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};
