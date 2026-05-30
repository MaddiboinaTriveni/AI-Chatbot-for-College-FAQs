/**
 * voice.js — Voice input using the Web Speech Recognition API.
 * Gracefully degrades if the browser doesn't support it.
 */

const VoiceInput = (() => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return {
      isSupported: false,
      start() { alert('Voice input is not supported in your browser. Please use Chrome or Edge.'); },
      stop() {},
      isListening: false
    };
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let _isListening = false;
  let _onResult = null;
  let _onEnd = null;
  let _onError = null;

  recognition.onstart = () => { _isListening = true; };
  recognition.onend   = () => {
    _isListening = false;
    if (_onEnd) _onEnd();
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(r => r[0].transcript)
      .join('');
    if (_onResult) _onResult(transcript, event.results[event.results.length - 1].isFinal);
  };

  recognition.onerror = (event) => {
    _isListening = false;
    console.error('Speech recognition error:', event.error);
    if (_onError) _onError(event.error);
  };

  return {
    isSupported: true,

    get isListening() { return _isListening; },

    /**
     * Start listening.
     * @param {string} lang - BCP 47 language tag e.g. 'en-IN', 'hi-IN'
     * @param {function} onResult - callback(transcript, isFinal)
     * @param {function} onEnd - callback when mic stops
     * @param {function} onError - callback(errorMessage)
     */
    start(lang = 'en-IN', onResult, onEnd, onError) {
      if (_isListening) this.stop();
      recognition.lang = lang;
      _onResult = onResult;
      _onEnd = onEnd;
      _onError = onError;
      try {
        recognition.start();
      } catch (e) {
        console.error('Could not start recognition:', e);
      }
    },

    stop() {
      if (_isListening) recognition.stop();
    }
  };
})();

// Language code map for voice
const VOICE_LANG_MAP = {
  en: 'en-IN',
  hi: 'hi-IN',
  te: 'te-IN',
  ta: 'ta-IN',
  fr: 'fr-FR',
  de: 'de-DE'
};
