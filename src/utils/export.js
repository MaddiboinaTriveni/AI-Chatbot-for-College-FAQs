/**
 * export.js — Export conversation as a .txt or .json file.
 */

const ChatExport = {
  /**
   * Download conversation history as plain text.
   * @param {Array} history - Array of {role, content, timestamp} objects
   */
  asText(history) {
    if (!history || history.length === 0) {
      alert('No conversation to export yet.');
      return;
    }

    const lines = [
      '='.repeat(50),
      'EduBot — College FAQ Chatbot',
      'Conversation Export',
      `Exported on: ${new Date().toLocaleString()}`,
      '='.repeat(50),
      ''
    ];

    history.forEach(msg => {
      const role = msg.role === 'user' ? 'You' : 'EduBot';
      const time = msg.timestamp || '';
      lines.push(`[${role}] ${time}`);
      lines.push(msg.content);
      lines.push('');
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    this._download(blob, `edubot-chat-${Date.now()}.txt`);
  },

  /**
   * Download conversation as JSON.
   * @param {Array} history
   */
  asJSON(history) {
    if (!history || history.length === 0) {
      alert('No conversation to export yet.');
      return;
    }

    const data = {
      exportedAt: new Date().toISOString(),
      messageCount: history.length,
      messages: history
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    this._download(blob, `edubot-chat-${Date.now()}.json`);
  },

  _download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
