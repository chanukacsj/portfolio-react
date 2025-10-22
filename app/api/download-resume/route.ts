export async function GET() {
  // Resume content as text - will be converted to PDF
  const resumeContent = `
CHANUKA SRI JEEWANTHA
Software Engineer Intern | Fullstack Developer
Email: chanucsj@gmail.com | Location: Matara, Sri Lanka
Phone: 0766872812 | GitHub: chanuka-sri-jeewantha
LinkedIn: chanukacsj | Portfolio: portfolio

PROFILE
Highly motivated Software Engineering student at IJSE with skills in Java, Spring Boot, Node.js, React, and UI/UX design. Passionate about learning new technologies and improving systems. Seeking a Software Engineer Internship to gain hands-on experience, contribute to innovative projects, and apply theoretical knowledge in real-world development.

TECHNICAL SKILLS
Programming Languages: Java, JavaScript, TypeScript, Python
Backend Development: Spring Boot, Node.js, Express.js
Databases: MySQL, MongoDB
Frontend Development: React, Bootstrap, Tailwind CSS, JavaFX, HTML
Mobile Development: React Native
Version Controlling: GitHub
Other Competencies: JWT Authentication, OOP

OTHER SKILLS
Quick Learning | Problem Solving | Self-Motivation | Googling & Research Skills | Time Management | Work Under Pressure

EDUCATION
2023 – 2025 | Institute of Software Engineering (IJSE), Galle
GDSE - Graduate Diploma In Software Engineering

2019 – 2021 | GCE Advanced Level (Matara Central College, Matara)
Science for technology, Information technology, Engineering Technology

PROJECTS
Smart Hotel Booking Website
Developed a hotel reservation platform with online room booking, customer reviews, secure PayHere payment integration, and manager dashboard. Focused on UI/UX for responsive and user-friendly experience.
Tech Stack: Java, Spring Boot, MySQL, HTML, CSS, JavaScript, Bootstrap, PayHere
Repository: https://github.com/chanukacsj/Smart-Hotel-Booking-WebSite

Online Course Enrollment System
Developed a comprehensive enrollment management platform with student registration, enrollment tracking, automatic email notifications, payment gateway integration, and admin dashboard.
Tech Stack: Node.js, Express.js, MongoDB, React, TypeScript, Redux, SendGrid
Frontend: https://github.com/chanukacsj/online-course-enrollment-system-frontend
Backend: https://github.com/chanukacsj/Online-Course-Enrollment-System-Backend

SpendWise
Mobile app for managing daily income and expenses with transaction categorization and weekly/monthly summaries through charts and dashboards.
Tech Stack: React Native, Firebase
Repository: https://github.com/chanukacsj/SpendWise-mobile-app

The Culinary Academy
Desktop application using Java with JavaFX GUI and Hibernate (JPA) for database persistence. Implemented course management, student management, payment management, and course enrollment.
Tech Stack: Java, JavaFX, Hibernate/JPA, MySQL
Repository: https://github.com/chanukacsj/ORM-Course-Work.git

Smart Parking Management System (SPMS)
Microservice-based system using Spring Boot with service discovery, centralized configuration, API routing, and role-based access.
Tech Stack: Java, Spring Boot, Spring Cloud (Eureka, Config, Gateway), MySQL
Repository: https://github.com/chanukacsj/spms.git

REFERENCES
Mr. Prasad Waduge, CEO/Senior Lecturer IJSE
Email: prasad@ijse.lk | Phone: 077 225 2985

Mr. Punsara Prathibha, Lecturer, Institute of Software Engineering
Email: punsaraprathibhagpp@gmail.com | Phone: 071 936 2595
  `

  // Create a simple text response that can be downloaded
  const encoder = new TextEncoder()
  const data = encoder.encode(resumeContent)

  return new Response(data, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Chanuka_Sri_Jeewantha_Resume.txt"',
    },
  })
}
