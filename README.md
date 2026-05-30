# 🎓 AI Chatbot for College FAQs

## 🔗 Live Demo

### Netlify Deployment

https://ai-chatbot-for-college-faqs.netlify.app/

### GitHub Pages Deployment

https://maddiboinatriveni.github.io/AI-Chatbot-for-College-FAQs/

---

# 📌 Project Summary

The AI Chatbot for College FAQs is an intelligent conversational web application designed to assist students and parents by automatically answering common college-related queries.

The chatbot uses Artificial Intelligence and Natural Language Processing (NLP) concepts to understand user questions and generate contextual responses related to:

* Admissions
* Courses
* Fee structures
* Placements
* Hostel facilities
* Examinations
* Campus services
* Academic procedures

The system provides an interactive chat-based interface that enables users to obtain instant information without manual administrative support.

---

# ❗ Problem Statement

Students and parents often face difficulties in obtaining accurate and timely information regarding:

* College admissions
* Academic procedures
* Course details
* Examination schedules
* Fee structures
* Campus facilities

Traditional support systems such as:

* phone calls,
* emails,
* and help desks

can become overloaded, leading to:

* delayed responses,
* inefficient communication,
* and poor accessibility.

This project aims to solve these issues by developing an AI-powered chatbot capable of automatically answering frequently asked questions using AI-driven conversational techniques.

---

# 🎯 Objectives

The main objectives of this project are:

* Automate responses to frequently asked college queries
* Provide instant and accurate information to students
* Reduce workload on administrative staff
* Improve accessibility to academic information
* Support multi-college architecture
* Enable conversational interaction through AI
* Build a scalable educational chatbot platform

---

# ✨ Key Features

## 🤖 AI-Powered Chatbot

* Intelligent conversational responses
* Dynamic prompt generation
* AI-based contextual understanding

## 🏫 Multi-College Support

* SACET
* JNTU
* VIT
* Extendable architecture for additional colleges

## 🌐 User-Friendly Interface

* Responsive modern UI
* Interactive chat experience
* Topic-based navigation
* Smooth user interaction

## 🎤 Advanced Features

* Voice input support
* Local conversation history
* Dynamic suggestions
* Multi-topic query handling
* English language support

---

# 🛠️ Technology Stack

## Frontend Technologies

* HTML5
* CSS3
* JavaScript (ES Modules)

## AI & NLP Technologies

* Groq API
* Large Language Models (LLMs)
* Prompt Engineering Concepts

## Browser APIs

* Web Speech API
* LocalStorage API

## Deployment Platforms

* Netlify
* GitHub Pages

---

# 🧠 System Architecture

User
↓
Select College
↓
Load College Dataset
↓
Generate Dynamic Prompt
↓
Send Query to AI Model
↓
Generate Intelligent Response
↓
Display Chat Response

---

# 📂 Project Structure

```bash
AI-Chatbot-for-College-FAQs/
│
├── index.html
├── README.md
│
├── src/
│   ├── components/
│   │   ├── chat.js
│   │   ├── message.js
│   │   ├── suggestions.js
│   │   └── typing.js
│   │
│   ├── data/
│   │   ├── colleges.js
│   │   ├── sacet.js
│   │   ├── jntu.js
│   │   ├── vit.js
│   │   ├── faqs.js
│   │   └── suggestions.js
│   │
│   ├── styles/
│   │   ├── main.css
│   │   ├── chat.css
│   │   └── sidebar.css
│   │
│   ├── utils/
│   │   ├── export.js
│   │   ├── markdown.js
│   │   ├── storage.js
│   │   └── voice.js
│   │
│   └── main.js
│
└── docs/
    └── architecture.md
```

---

# ⚙️ How It Works

1. User selects a college from the dropdown.
2. College-specific information is loaded dynamically.
3. A contextual AI prompt is generated.
4. User submits a question.
5. Query is sent to the AI model.
6. AI generates a context-aware response.
7. Response is displayed in the chatbot interface.

---

# 💬 Sample Questions

* What courses are available?
* Explain the admission process.
* What are the placement statistics?
* Tell me about hostel facilities.
* What is the fee structure?
* How can I contact the college?

---

# 🚀 Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/maddiboinatriveni/AI-Chatbot-for-College-FAQs.git
```

---

## 2️⃣ Open Project Folder

```bash
cd AI-Chatbot-for-College-FAQs
```

---

## 3️⃣ Run Local Server

```bash
python -m http.server 5500
```

---

## 4️⃣ Open Browser

```text
http://localhost:5500
```

---

# 🔐 API Configuration

Inside:

```text
src/components/chat.js
```

Replace:

```javascript
Bearer YOUR_API_KEY
```

with your actual Groq API key:

```javascript
Bearer gsk_xxxxxxxxxxxxxxxxx
```

---

# 📈 Future Enhancements

* Secure backend integration
* Database connectivity
* Authentication system
* Admin dashboard
* Voice output support
* Real-time analytics
* Dark mode
* Multi-language support
* AI memory/context persistence

---

# 📚 Learning Outcomes

This project helped in understanding:

* AI chatbot workflows
* NLP-based conversational systems
* Prompt engineering concepts
* API integration
* Modular JavaScript architecture
* Frontend deployment
* Multi-college scalable systems
* Real-world conversational UI design

---

# 👨‍💻 Author

## Maddiboina Triveni

B.Tech — Computer Science Engineering

---

# 🙏 Acknowledgements

* Groq API
* Netlify
* GitHub Pages
* Web Speech API
* Google Fonts
* Tabler Icons
* Open-source developer community

---

# ⭐ Project Highlights

✅ AI-Powered Chatbot
✅ Multi-College Support
✅ Dynamic Prompt Generation
✅ Voice Input Support
✅ Responsive UI
✅ Real-Time Chat Experience
✅ Modular Architecture
✅ Deployable Web Application
