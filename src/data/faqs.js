/**
 * faqs.js — Structured FAQ data for the college chatbot.
 * Used as knowledge context for the AI system prompt.
 */

const COLLEGE_FAQ_DATA = {
  institution: {
    name: "Greenfield University",
    established: 1985,
    location: "Hyderabad, Telangana, India",
    website: "www.greenfielduniversity.edu.in",
    phone: "+91-40-2345-6789",
    email: "info@greenfielduniversity.edu.in",
    hours: "Mon–Sat, 9:00 AM – 5:00 PM"
  },

  admissions: {
    eligibility: {
      undergraduate: "10+2 or equivalent with minimum 60% aggregate. Science streams require PCM/PCB.",
      postgraduate: "Relevant undergraduate degree with minimum 55% aggregate.",
      phd: "Postgraduate degree with minimum 55% aggregate and a valid research proposal."
    },
    process: [
      "Fill out the online application form at the university portal.",
      "Upload required documents (marksheets, ID proof, passport photo).",
      "Pay the application fee of ₹500 (non-refundable).",
      "Appear for the entrance test (GUET) or submit valid JEE/GATE/CAT scores.",
      "Attend the personal interview (for select programs).",
      "Receive admission offer letter via email within 7 working days."
    ],
    documents: [
      "10th & 12th marksheets and certificates",
      "Transfer Certificate (TC) from previous institution",
      "Migration Certificate (for students from other states/boards)",
      "Character Certificate",
      "Medical Fitness Certificate",
      "Passport-size photographs (6 copies)",
      "Aadhar card / valid government ID",
      "Category certificate (SC/ST/OBC if applicable)"
    ],
    importantDates: {
      applicationStart: "March 1, 2025",
      applicationClose: "May 31, 2025",
      entranceTest: "June 15, 2025",
      resultsDate: "June 25, 2025",
      admissionStart: "July 1, 2025",
      classesBegin: "August 1, 2025"
    },
    entranceExam: "Greenfield University Entrance Test (GUET) — 2 hours, 100 MCQ questions covering core subject knowledge and aptitude."
  },

  courses: {
    undergraduate: [
      { name: "B.Tech Computer Science & Engineering", duration: "4 years", seats: 120, specializations: ["AI/ML", "Cybersecurity", "Data Science"] },
      { name: "B.Tech Electronics & Communication", duration: "4 years", seats: 60 },
      { name: "B.Tech Mechanical Engineering", duration: "4 years", seats: 60 },
      { name: "BCA (Bachelor of Computer Applications)", duration: "3 years", seats: 60 },
      { name: "B.Sc Computer Science", duration: "3 years", seats: 60 },
      { name: "BBA (Bachelor of Business Administration)", duration: "3 years", seats: 60 },
      { name: "B.Com (Hons.)", duration: "3 years", seats: 60 }
    ],
    postgraduate: [
      { name: "M.Tech Computer Science", duration: "2 years", seats: 30 },
      { name: "M.Tech Data Science & AI", duration: "2 years", seats: 30 },
      { name: "MCA (Master of Computer Applications)", duration: "2 years", seats: 60 },
      { name: "MBA (Master of Business Administration)", duration: "2 years", seats: 60, specializations: ["Finance", "Marketing", "HR", "Operations"] },
      { name: "M.Sc Computer Science", duration: "2 years", seats: 30 }
    ],
    certification: [
      "Full Stack Web Development (6 months)",
      "Data Science with Python (3 months)",
      "Cloud Computing — AWS/Azure (3 months)",
      "Cybersecurity Fundamentals (3 months)",
      "Digital Marketing (2 months)"
    ]
  },

  fees: {
    tuition: {
      "B.Tech": "₹1,20,000 per year",
      "BCA / B.Sc": "₹60,000 per year",
      "BBA / B.Com": "₹55,000 per year",
      "M.Tech": "₹1,00,000 per year",
      "MCA / M.Sc": "₹70,000 per year",
      "MBA": "₹1,50,000 per year"
    },
    otherFees: {
      admissionFee: "₹5,000 (one-time)",
      examFee: "₹2,500 per semester",
      libraryFee: "₹1,500 per year",
      labFee: "₹3,000 per year (for technical programs)",
      sportsAndCulture: "₹1,000 per year",
      studentAmenities: "₹2,000 per year"
    },
    hostel: {
      room: "₹40,000–₹60,000 per year (based on occupancy)",
      mess: "₹25,000–₹30,000 per year",
      deposit: "₹10,000 (refundable)"
    },
    scholarships: [
      { name: "Merit Scholarship", criteria: "Top 5% of entrance exam scorers", value: "25–100% tuition waiver" },
      { name: "SC/ST Scholarship", criteria: "Government scholarship for reserved categories", value: "Full fee waiver + stipend (state govt)" },
      { name: "Sports Quota", criteria: "National/state level sports achievement", value: "Up to 50% tuition waiver" },
      { name: "Greenfield Alumni Scholarship", criteria: "Ward of alumni, based on financial need", value: "15% tuition waiver" },
      { name: "Girls STEM Scholarship", criteria: "Female students in B.Tech programs", value: "10% tuition waiver" }
    ],
    paymentModes: ["Online Portal (Net Banking, UPI, Cards)", "Demand Draft in favour of Greenfield University", "NEFT/RTGS", "Education Loan facilitation available with tie-up banks"]
  },

  exams: {
    pattern: "Semester system (2 semesters per year). Each semester: 2 Internal Assessment Tests + 1 End Semester Examination.",
    grading: {
      system: "10-point CGPA system",
      scale: [
        { grade: "O (Outstanding)", points: 10, percentage: "≥90%" },
        { grade: "A+ (Excellent)", points: 9, percentage: "80–89%" },
        { grade: "A (Very Good)", points: 8, percentage: "70–79%" },
        { grade: "B+ (Good)", points: 7, percentage: "60–69%" },
        { grade: "B (Above Average)", points: 6, percentage: "50–59%" },
        { grade: "C (Average)", points: 5, percentage: "40–49%" },
        { grade: "F (Fail)", points: 0, percentage: "<40%" }
      ],
      minimumPassing: "40% in each subject and minimum CGPA of 5.0 for promotion"
    },
    schedule: {
      oddSemester: { internalTest1: "September", internalTest2: "October", endSemester: "November–December" },
      evenSemester: { internalTest1: "February", internalTest2: "March", endSemester: "April–May" }
    },
    revaluation: "Students may apply for revaluation within 15 days of result declaration. Fee: ₹500 per subject.",
    backlogPolicy: "Students with arrear papers may appear in supplementary examinations conducted every July and January.",
    hallTicket: "Hall tickets are released 7 days before the exam on the student portal. Mandatory for examination entry."
  },

  facilities: {
    library: {
      name: "Knowledge Resource Centre",
      books: "1,20,000+ volumes",
      journals: "500+ national and international journals",
      digital: "Access to IEEE, Springer, DELNET, and NPTEL e-resources",
      hours: "Mon–Sat 8:00 AM – 9:00 PM; Sun 10:00 AM – 4:00 PM"
    },
    labs: [
      "Advanced Computing Lab (250 nodes, 24/7 internet)",
      "AI & Machine Learning Research Lab",
      "IoT & Embedded Systems Lab",
      "Electronics & Communication Lab",
      "Physics, Chemistry & Biology Labs",
      "Language Lab"
    ],
    sports: ["Cricket ground", "Football/Football turf", "Basketball & Volleyball courts", "Badminton hall", "Table Tennis", "Indoor Gymnasium", "Swimming pool"],
    transport: "Bus facility covering 30+ routes across Hyderabad and Secunderabad. Monthly pass: ₹1,500.",
    canteen: "Multi-cuisine cafeteria operating 7:30 AM – 9:00 PM. Hygienic, FSSAI-certified.",
    wifi: "Free Wi-Fi across campus (100 Mbps leased line), accessible in hostels, classrooms, and common areas.",
    medical: "On-campus health centre with resident doctor and tie-up with nearby hospital for emergencies.",
    banking: "ATM (SBI) on campus. Bank branch nearby.",
    placement_cell: "Active Training & Placement Cell with dedicated placement officers and industry partnerships."
  },

  hostel: {
    availability: "Separate hostels for boys and girls. Day-scholar accommodation also available near campus.",
    capacity: "Girls Hostel: 600 seats; Boys Hostel: 800 seats",
    amenities: ["24×7 security and CCTV surveillance", "High-speed Wi-Fi", "Mess with 3 meals + snacks", "Laundry service", "Common TV lounge", "Reading room", "Gym"],
    rules: "Biometric attendance, visitor hours 4–7 PM on weekdays, extended on weekends.",
    allotment: "Allotment based on distance from home and first-come-first-served among eligible applicants."
  },

  placements: {
    highlights: "Average placement rate of 92% over the last 3 years.",
    packageRange: "₹3.5 LPA – ₹24 LPA. Average CTC: ₹6.2 LPA (B.Tech 2024 batch).",
    topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Accenture", "Cognizant", "Amazon", "Microsoft", "Google (internship)", "Deloitte", "KPMG", "Capgemini"],
    support: ["Resume & LinkedIn workshops", "Mock interviews", "Coding boot camps", "Soft skills & communication training", "Industry mentorship program"],
    internships: "Mandatory 6-week summer internship for B.Tech students after 3rd year."
  }
};
