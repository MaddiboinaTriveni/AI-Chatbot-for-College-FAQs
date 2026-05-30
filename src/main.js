/**
 * main.js — Application entry point.
 * Initialises components, binds events, and wires the UI.
 */
import { Chat } from './components/chat.js';
window.App = (() => {

  // ── DOM elements ──────────────────────────────────────────────────────
  const $ = id => document.getElementById(id);

  const els = {
    messagesArea:   $('messagesArea'),
    suggestionsBar: $('suggestionsBar'),
    chatInput:      $('chatInput'),
    sendBtn:        $('sendBtn'),
    voiceBtn:       $('voiceBtn'),
    exportBtn:      $('exportBtn'),
    clearBtn:       $('clearBtn'),
    menuBtn:        $('menuBtn'),
    overlay:        $('overlay'),
    sidebar:        document.querySelector('.sidebar'),
    languageSelect: $('languageSelect'),
    questionCount:  $('questionCount'),
    navBtns:        document.querySelectorAll('.nav-btn')
  };

  // ── Init ──────────────────────────────────────────────────────────────
  function init() {
    // Initialise core modules
    Chat.init({
      messagesArea:     els.messagesArea,
      input:            els.chatInput,
      sendBtn:          els.sendBtn,
      questionCountEl:  els.questionCount
    });

    SuggestionsBar.init(els.suggestionsBar, (text) => {
      els.chatInput.value = text;
      sendMessage();
    });

    // Restore UI state
    const savedLang  = Storage.loadPreference(Storage.KEYS.LANGUAGE, 'en');
    const savedTopic = Storage.loadPreference(Storage.KEYS.TOPIC, 'general');

    if (els.languageSelect) els.languageSelect.value = savedLang;

    // Activate correct nav btn
    els.navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.topic === savedTopic);
    });

    // Render welcome or restore history
    const history = Chat.getState().history;
    if (history && history.length > 0) {
      renderHistory(history);
      SuggestionsBar.show(savedTopic);
    } else {
      renderWelcome();
    }

    bindEvents();
  }

  // ── Welcome screen ────────────────────────────────────────────────────
  function renderWelcome() {
    els.messagesArea.innerHTML = '';
    const screen = document.createElement('div');
    screen.className = 'welcome-screen';

    const chips = WELCOME_CHIPS.map(c =>
      `<button class="quick-chip" data-query="${c.query}">
         <i class="ti ${c.icon}" aria-hidden="true"></i>
         <span>${c.label}</span>
       </button>`
    ).join('');

    screen.innerHTML = `
      <div class="welcome-icon"><i class="ti ti-robot" aria-hidden="true"></i></div>
      <h1 class="welcome-title">Hi, I'm EduBot!</h1>
      <p class="welcome-sub">Your AI campus guide — ask me anything about admissions, courses, fees, exams, or facilities at Greenfield University.</p>
      <div class="quick-chips" role="list">${chips}</div>
    `;

    screen.querySelectorAll('.quick-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        els.chatInput.value = btn.dataset.query;
        sendMessage();
      });
    });

    els.messagesArea.appendChild(screen);
  }

  // ── Restore history ───────────────────────────────────────────────────
  function renderHistory(history) {
    els.messagesArea.innerHTML = '';
    history.forEach(msg => {
      if (msg.role === 'user' || msg.role === 'assistant') {
        const el = Message.create(
          msg.role === 'user' ? 'user' : 'bot',
          msg.content,
          msg.timestamp || ''
        );
        els.messagesArea.appendChild(el);
      }
    });
    els.messagesArea.scrollTop = els.messagesArea.scrollHeight;
  }

  // ── Send message ──────────────────────────────────────────────────────
  async function sendMessage() {
    const text = els.chatInput.value.trim();
    if (!text) return;

    // Remove welcome screen if present
    const welcome = els.messagesArea.querySelector('.welcome-screen');
    if (welcome) welcome.remove();

    els.chatInput.value = '';
    autoResizeTextarea();
    SuggestionsBar.clear();

    await Chat.send(text);

    // Show fresh suggestions after reply
    SuggestionsBar.show(Chat.getState().currentTopic);
  }

  // ── Textarea auto-resize ──────────────────────────────────────────────
  function autoResizeTextarea() {
    const ta = els.chatInput;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
  }

  // ── Event bindings ────────────────────────────────────────────────────
  function bindEvents() {

    // Send on button click
    els.sendBtn.addEventListener('click', sendMessage);

    // Send on Enter (Shift+Enter = newline)
    els.chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Auto-resize textarea
    els.chatInput.addEventListener('input', autoResizeTextarea);

    // Language selector
    els.languageSelect.addEventListener('change', e => {
      Chat.setLanguage(e.target.value);
    });

// College selector
const collegeSelect =
  document.getElementById('collegeSelect');

if (collegeSelect) {

  collegeSelect.addEventListener(
    'change',
    (e) => {

      Chat.getState().currentCollege =
        e.target.value;

    }
  );
}


    // Topic navigation
    els.navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Chat.setTopic(btn.dataset.topic);
        SuggestionsBar.show(btn.dataset.topic);
        closeSidebar();
      });
    });

    // Clear chat
    els.clearBtn.addEventListener('click', () => {
      if (confirm('Clear the entire conversation? This cannot be undone.')) {
        Chat.clear();
      }
    });

    // Export chat
    els.exportBtn.addEventListener('click', () => {
      ChatExport.asText(Chat.getState().history);
    });

    // Voice input
    els.voiceBtn.addEventListener('click', () => {
      if (!VoiceInput.isSupported) {
        VoiceInput.start();
        return;
      }

      if (VoiceInput.isListening) {
        VoiceInput.stop();
        els.voiceBtn.classList.remove('active');
        return;
      }

      const lang = VOICE_LANG_MAP[Chat.getState().currentLanguage] || 'en-IN';
      els.voiceBtn.classList.add('active');

      VoiceInput.start(
        lang,
        (transcript, isFinal) => {
          els.chatInput.value = transcript;
          autoResizeTextarea();
          if (isFinal) {
            els.voiceBtn.classList.remove('active');
            setTimeout(sendMessage, 300);
          }
        },
        () => { els.voiceBtn.classList.remove('active'); },
        (err) => {
          els.voiceBtn.classList.remove('active');
          if (err !== 'no-speech') console.error('Voice error:', err);
        }
      );
    });

    // Mobile menu
    if (els.menuBtn) {
      els.menuBtn.addEventListener('click', openSidebar);
    }
    if (els.overlay) {
      els.overlay.addEventListener('click', closeSidebar);
    }
  }

  // ── Mobile sidebar helpers ────────────────────────────────────────────
  function openSidebar() {
    els.sidebar.classList.add('open');
    els.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    els.sidebar.classList.remove('open');
    els.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── Expose for chat.js clear() to call renderWelcome ─────────────────
  return {
    init,
    renderWelcome,
    renderHistory
  };

})();

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());
