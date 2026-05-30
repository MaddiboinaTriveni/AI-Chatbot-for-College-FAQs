/**
 * suggestions.js — Context-aware follow-up suggestions per topic.
 */

const TOPIC_SUGGESTIONS = {
  general: [
    "What are the office hours?",
    "Where is the campus located?",
    "How do I contact the admissions office?",
    "What makes Greenfield University unique?"
  ],
  admissions: [
    "What are the eligibility criteria?",
    "What documents are required?",
    "When does the application open?",
    "Is there an entrance test?",
    "What is the admission process?",
    "Can I apply for lateral entry?"
  ],
  courses: [
    "What B.Tech programs are available?",
    "Are there postgraduate courses?",
    "How long is the MBA program?",
    "Are online or part-time courses offered?",
    "What specializations are in B.Tech CSE?"
  ],
  fees: [
    "What is the B.Tech tuition fee?",
    "Are scholarships available?",
    "What are the hostel fees?",
    "Can I pay fees in installments?",
    "Is education loan available?",
    "What is the application fee?"
  ],
  exams: [
    "How does the grading system work?",
    "When are the semester exams?",
    "How can I apply for revaluation?",
    "What is the minimum passing criteria?",
    "How do I get my hall ticket?",
    "What happens if I fail a subject?"
  ],
  facilities: [
    "What labs are available?",
    "Tell me about the library",
    "Is Wi-Fi available in hostels?",
    "What sports facilities are there?",
    "Is there a health centre on campus?",
    "What transport options are available?"
  ],
  hostel: [
    "Are hostels separate for boys and girls?",
    "What are the hostel charges?",
    "What amenities are in the hostel?",
    "How is hostel allotment done?",
    "Is Wi-Fi available in hostels?",
    "What are the hostel rules?"
  ],
  placements: [
    "What is the average placement package?",
    "Which companies visit for campus placements?",
    "What training is provided before placements?",
    "Are internships mandatory?",
    "What is the highest package offered?"
  ]
};

const WELCOME_CHIPS = [
  { icon: "ti-file-text",        label: "Admission process",        query: "How do I apply for admission?" },
  { icon: "ti-book",             label: "Courses offered",           query: "What courses and programs are offered?" },
  { icon: "ti-credit-card",      label: "Fees & scholarships",       query: "What are the tuition fees and scholarships?" },
  { icon: "ti-clipboard-check",  label: "Exam & grading system",     query: "How does the examination and grading system work?" },
  { icon: "ti-building",         label: "Campus facilities",         query: "What facilities are available on campus?" },
  { icon: "ti-briefcase",        label: "Placements & careers",      query: "What is the placement record and support?" }
];
