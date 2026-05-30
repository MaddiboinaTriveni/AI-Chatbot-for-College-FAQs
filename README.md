# AI Chatbot for College FAQs

## Live Demo

🔗 https://ai-chatbot-for-college-faqs.netlify.app/

---

## Project Overview

AI Chatbot for College FAQs is an intelligent web-based assistant designed to help students quickly access information related to admissions, courses, fees, placements, hostel facilities, examinations, campus services, and other academic queries.

The chatbot dynamically generates responses using Artificial Intelligence and supports multiple colleges through a scalable architecture.

Educational chatbots are increasingly used to provide instant student support, automate repetitive queries, and improve accessibility to institutional information.

---

## Problem Statement

Students often struggle to find accurate college information due to:

* Large volumes of FAQs
* Delayed responses from administration
* Limited availability of support staff
* Difficulty navigating college websites

This project provides an AI-powered solution that delivers instant responses through a conversational interface.

---

## Objectives

* Provide 24/7 student assistance
* Reduce repetitive college inquiries
* Support multiple colleges through a single platform
* Deliver AI-generated responses dynamically
* Improve accessibility of college information

---

## Key Features

* AI-powered conversational chatbot
* Multi-college architecture
* Dynamic prompt generation
* English language support
* Modular JavaScript architecture
* Topic-based navigation
* Voice input support
* Responsive user interface
* Typing indicators
* Conversation history management

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES Modules)

### AI Integration

* Groq API
* LLM-based response generation

### Browser APIs

* Web Speech API
* Local Storage API

### Deployment

* Netlify

---

## System Architecture

User
↓
Select College
↓
Load College Information
↓
Build Dynamic Prompt
↓
Send Query to AI Model
↓
Generate Intelligent Response
↓
Display Answer

---

## Project Structure

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

## How It Works

1. User selects a college.
2. College-specific data is loaded.
3. A dynamic AI prompt is generated.
4. User submits a question.
5. The query is sent to the AI model.
6. The chatbot generates a contextual response.
7. Response is displayed in the chat interface.

---

## Sample Questions

* What courses are available?
* What is the admission process?
* Tell me about placements.
* What are the hostel facilities?
* What is the annual fee structure?
* How can I contact the college?

---

## Future Enhancements

* Secure backend integration
* Database connectivity
* Authentication system
* Admin dashboard
* Analytics and reporting
* Real-time college updates
* Dark mode
* Voice output support
* Multilingual expansion

---

## Learning Outcomes

Through this project:

* AI API integration was implemented.
* Modular frontend architecture was developed.
* Dynamic prompt engineering concepts were applied.
* Multi-college data management was designed.
* Real-world chatbot workflows were explored.

---

## Author

Maddiboina Triveni

B.Tech Computer Science Engineering

---

## Acknowledgements

* Groq API
* Netlify
* Web Speech API
* Open-source web development resources
