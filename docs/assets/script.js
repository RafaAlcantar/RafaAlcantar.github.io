let currentLang = "en";

const translations = {
  en: {
    roles: "💻 Software Engineer | 📊 ML Engineer | 📹 Machine Vision Engineer",
    student: "🧑‍🎓 Student at Udemy, Platzi, LinkedIn Learning and Santander Open Academy",
    contact: "Contact",
    about: "About me",
    aboutText1: "Software Engineer with over 11 years of experience developing complex technological solutions in sectors such as automotive and aerospace industries. Specialist in object-oriented programming using C#, C++, Python, and Java, consistently applying quality standards, SOLID principles, and Clean Code practices to ensure maintainable and efficient software.",
    aboutText2: "I have designed and developed software for computer vision, augmented reality, artificial intelligence, and 3D inspection, significantly contributing to the automation and improvement of industrial processes. I excel in leading the development of robust applications using the Microsoft .NET stack, vision frameworks like OpenCV, and databases such as MySQL and PostgreSQL.",
    aboutText3: "Passionate about continuous improvement, collaborative work in agile teams (Scrum), and technological innovation, I seek to provide high-impact technical solutions that enhance product quality and user satisfaction.",
    experience: "Work Experience",
    projects: "Projects",
    year: "Year",
    project: "Project",
    company: "Company",
    tech: "Technologies",
    skills: "Skills and Technologies",
    technology: "Technology",
    proficiency: "Proficiency",
    education: "Education",
    languages: "Languages",
    strengths: "Strengths",
    certifications: "Certifications",
    learning: "Currently Learning",
    educationItems: [
      "<strong>Master of Science in Computer Science</strong> – CENIDET (2010–2013)",
      "<strong>Visiting Researcher</strong> – Rey Juan Carlos University (2012)",
      "<strong>Computer Systems Engineer</strong> – IT of Cuautla (2004–2009)"
    ],
    languageItems: [
      "<strong>Spanish:</strong> Native",
      "<strong>English:</strong> Intermediate"
    ],
    strengthItems: [
      "Problem solving",
      "Critical and analytical thinking",
      "Teamwork and collaboration",
      "Adaptability to new technologies",
      "Project management",
      "Effective communication"
    ],
    certificationItems: [
      "📜 AWS Certified Cloud Practitioner (In progress)",
      "📚 Courses: Udemy, Platzi, Santander Scholarships, LinkedIn Learning"
    ],
    learningItems: [
      "AWS Cloud Practitioner",
      "🤖 TensorFlow – Deep learning and neural networks",
      "🐘 PostgreSQL – Advanced SQL queries",
      "🌐 .NET Core – Web development with Razor Pages and APIs",
      "📊 Data Science – Python, pandas, matplotlib"
    ],
    experienceItems: [
      {
        title: "Software Engineer",
        company: "3D INFOTECH",
        locationDate: "Mexico City | Jun 2015 – Jan 2025",
        description: "Led the development of computer vision and augmented reality solutions for automation, dimensional inspection and robotic assistance in industrial environments. Worked with C#, C++, Python and Java, using OpenCV, EMGU CV, Eyeshot and MathNet. Designed plugins for SolidWorks and PolyWorks, optimizing reverse engineering processes and significantly reducing inspection times in automotive and aerospace sectors."
      },
      {
        title: "Software Engineer",
        company: "Global Corporation",
        locationDate: "Mexico City | Apr 2013 – May 2015",
        description: "Developed computer vision systems for urban security, real-time monitoring and character recognition (OCR), using C++, C#, PHP and machine learning techniques. Managed video streaming servers and led an R&D team focused on software quality and data management efficiency with MySQL and PostgreSQL."
      },
      {
        title: "Visiting Researcher",
        company: "Rey Juan Carlos University",
        locationDate: "Móstoles, Spain | Jan – Apr 2012",
        description: "Developed a visual analysis system to detect suspicious behavior in parking lots, as part of my master's thesis in AI, applying computer vision algorithms and motion analysis."
      },
      {
        title: "Computer Teacher",
        company: "English COM School",
        locationDate: "Cuautla, Morelos | Aug 2009 – Feb 2011",
        description: "Taught web programming, digital design and office automation courses. Designed practical curricula in PHP, MySQL, Photoshop and Office, fostering students' technical and logical development."
      },
      {
        title: "Programming Resident",
        company: "Continental",
        locationDate: "Cuautla, Morelos | Nov 2008 – May 2009",
        description: "Developed a web system for environmental management and medical incident reporting, using PHP and MySQL. Improved data traceability and optimized processes in the industrial safety and hygiene area."
      }
    ],
    projectItems: [
      "Spotlight AR++ Dynamic Projection",
      "Spotlight AR++",
      "Visual Brackets Verification",
      "Aruna Vision",
      "Part ID",
      "Karbon",
      "People detection and tracking in department stores",
      "Vehicle detection, tracking and speed estimation on roads",
      "License plate recognition",
      "Neural Network OCR",
      "Suspicious Movements",
      "Environmental and medical management"
    ]
  },
  es: {
    roles: "💻 Ingeniero de Software | 📊 Ingeniero de ML | 📹 Ingeniero en Visión por Computadora",
    student: "🧑‍🎓 Estudiante en Udemy, Platzi, LinkedIn Learning y Santander Open Academy",
    contact: "Contacto",
    about: "Sobre mí",
    aboutText1: "Ingeniero de Software con más de 11 años de experiencia desarrollando soluciones tecnológicas complejas en sectores como la industria automotriz y aeroespacial. Especialista en programación orientada a objetos utilizando C#, C++, Python y Java, aplicando consistentemente estándares de calidad, principios SOLID, y prácticas de Clean Code para garantizar software mantenible y eficiente.",
    aboutText2: "He diseñado y desarrollado software para visión por computadora, realidad aumentada, inteligencia artificial e inspección 3D, contribuyendo significativamente a la automatización y mejora de procesos industriales. Me destaco por liderar el desarrollo de aplicaciones robustas utilizando el stack de Microsoft .NET, frameworks de visión como OpenCV, y bases de datos como MySQL y PostgreSQL.",
    aboutText3: "Apasionado por la mejora continua, el trabajo colaborativo en equipos ágiles (Scrum) y la innovación tecnológica, busco aportar soluciones de alto impacto técnico que eleven la calidad del producto y la satisfacción del usuario.",
    experience: "Experiencia Laboral",
    projects: "Proyectos",
    year: "Año",
    project: "Proyecto",
    company: "Empresa",
    technologies: "Tecnologías",
    skills: "Lenguajes y Tecnologías",
    tech: "Tecnología",
    proficiency: "Dominio",
    education: "Educación",
    languages: "Idiomas",
    strengths: "Fortalezas",
    certifications: "Certificaciones",
    learning: "Actualmente Aprendiendo",
    educationItems: [
      "<strong>Maestro en Ciencias en Ciencias de la Computación</strong> – CENIDET (2010–2013)",
      "<strong>Investigador visitante</strong> – Universidad Rey Juan Carlos (2012)",
      "<strong>Ingeniero en Sistemas Computacionales</strong> – IT de Cuautla (2004–2009)"
    ],
    languageItems: [
      "<strong>Español:</strong> Nativo",
      "<strong>Inglés:</strong> Intermedio"
    ],
    strengthItems: [
      "Resolución de problemas",
      "Pensamiento crítico y analítico",
      "Trabajo en equipo y colaboración",
      "Adaptabilidad a nuevas tecnologías",
      "Gestión de proyectos",
      "Comunicación efectiva"
    ],
    certificationItems: [
      "📜 AWS Certified Cloud Practitioner (En curso)",
      "📚 Cursos: Udemy, Platzi, Santander Scholarships, LinkedIn Learning"
    ],
    learningItems: [
      "AWS Cloud Practitioner",
      "🤖 TensorFlow – Deep learning y redes neuronales",
      "🐘 PostgreSQL – Consultas avanzadas en SQL",
      "🌐 .NET Core – Desarrollo web con Razor Pages y APIs",
      "📊 Ciencia de Datos – Python, pandas, matplotlib"
    ],
    experienceItems: [
      {
        title: "Ingeniero de Software",
        company: "3D INFOTECH",
        locationDate: "Ciudad de México | Jun 2015 – Ene 2025",
        description: "Lideré el desarrollo de soluciones de visión por computadora y realidad aumentada para automatización, inspección dimensional y asistencia robótica en entornos industriales. Trabajé con C#, C++, Python y Java, usando OpenCV, EMGU CV, Eyeshot y MathNet. Diseñé plugins para SolidWorks y PolyWorks, optimizando procesos de ingeniería inversa y reduciendo significativamente los tiempos de inspección en sectores automotriz y aeroespacial."
      },
      {
        title: "Ingeniero de Software",
        company: "Global Corporation",
        locationDate: "Ciudad de México | Abr 2013 – May 2015",
        description: "Desarrollé sistemas de visión artificial para seguridad urbana, monitoreo en tiempo real y reconocimiento de caracteres (OCR), utilizando C++, C#, PHP y técnicas de machine learning. Administré servidores de video streaming y lideré un equipo de I+D enfocado en calidad de software y eficiencia en el manejo de datos con MySQL y PostgreSQL."
      },
      {
        title: "Investigador Visitante",
        company: "Universidad Rey Juan Carlos",
        locationDate: "Móstoles, España | Ene – Abr 2012",
        description: "Desarrollé un sistema de análisis visual para detectar comportamientos sospechosos en estacionamientos, como parte de mi tesis de maestría en IA, aplicando algoritmos de visión por computadora y análisis de movimiento."
      },
      {
        title: "Profesor de Computación",
        company: "Colegio English COM",
        locationDate: "Cuautla, Morelos | Ago 2009 – Feb 2011",
        description: "Impartí cursos de programación web, diseño digital y ofimática. Diseñé planes de estudio prácticos en PHP, MySQL, Photoshop y Office, fomentando el desarrollo técnico y lógico de los estudiantes."
      },
      {
        title: "Residente Programador",
        company: "Continental",
        locationDate: "Cuautla, Morelos | Nov 2008 – May 2009",
        description: "Desarrollé un sistema web para gestión ambiental y registro de incidentes médicos, usando PHP y MySQL. Mejoré la trazabilidad de datos y optimicé procesos en el área de seguridad e higiene industrial."
      }
    ],
    projectItems: [
      "Spotlight AR++ Dynamic Projection",
      "Spotlight AR++",
      "Visual Brackets Verification",
      "Aruna Vision",
      "Part ID",
      "Karbon",
      "Detección y seguimiento de personas en tiendas departamentales",
      "Detección, seguimiento y estimación de velocidad de autos en carretereas",
      "Reconocimiento de placas",
      "OCR con Red Neuronal",
      "Movimientos Sospechosos",
      "Gestión ambiental y médica"
    ]
  }
};

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  setLanguage(currentLang);
  updateExperienceSection(currentLang);
  updateProjectsSection(currentLang);
}

function updateListItems(listId, items) {
  const list = document.getElementById(listId);
  if (list) {
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  }
}

function setLanguage(lang) {
  // Update text elements
  document.getElementById("roles").textContent = translations[lang].roles;
  document.getElementById("student").textContent = translations[lang].student;
  document.getElementById("contact").textContent = translations[lang].contact;  
  document.getElementById("about").textContent = translations[lang].about;
  document.getElementById("aboutText1").textContent = translations[lang].aboutText1;
  document.getElementById("aboutText2").textContent = translations[lang].aboutText2;
  document.getElementById("aboutText3").textContent = translations[lang].aboutText3;
  document.getElementById("experience").textContent = translations[lang].experience;
  document.getElementById("projects").textContent = translations[lang].projects;
  document.getElementById("year").textContent = translations[lang].year;
  document.getElementById("project").textContent = translations[lang].project;
  document.getElementById("company").textContent = translations[lang].company;
  document.getElementById("tech").textContent = translations[lang].tech;
  document.getElementById("skills").textContent = translations[lang].skills;
  document.getElementById("technology").textContent = translations[lang].technology;
  document.getElementById("proficiency").textContent = translations[lang].proficiency;
  document.getElementById("education").textContent = translations[lang].education;
  document.getElementById("languages").textContent = translations[lang].languages;
  document.getElementById("strengths").textContent = translations[lang].strengths;
  document.getElementById("certifications").textContent = translations[lang].certifications;
  document.getElementById("learning").textContent = translations[lang].learning;
  // Update lists
  updateListItems('education-list', translations[lang].educationItems);
  updateListItems('languages-list', translations[lang].languageItems);
  updateListItems('strengths-list', translations[lang].strengthItems);
  updateListItems('certifications-list', translations[lang].certificationItems);
  updateListItems('learning-list', translations[lang].learningItems);
}

function updateExperienceSection(lang) {
  const experienceItems = translations[lang].experienceItems;
  const experienceGrids = document.querySelectorAll('.experience-grid');
  
  experienceGrids.forEach((grid, index) => {
    if (experienceItems[index]) {
      const expLeft = grid.querySelector('.exp-left');
      const expRight = grid.querySelector('.exp-right');
      
      if (expLeft) {
        expLeft.querySelector('h3').textContent = experienceItems[index].title;
        expLeft.querySelector('.company').textContent = experienceItems[index].company;
        expLeft.querySelector('.location-date').textContent = experienceItems[index].locationDate;
      }
      
      if (expRight) {
        expRight.querySelector('p').textContent = experienceItems[index].description;
      }
    }
  });  
  // Update language toggle button
  const btn = document.getElementById("lang-toggle");
  btn.textContent = lang === "es" ? "English" : "Español";
  btn.classList.add("active-language");
}

function updateProjectsSection(lang) {
  translations[lang].projectItems.forEach((project, index) => {
    const projectElement = document.getElementById(`project-${index + 1}`);
    if (projectElement) {
      projectElement.textContent = project;
    }
  });
}


// Initialize with default language
document.addEventListener('DOMContentLoaded', function() {
  setLanguage(currentLang);
  updateExperienceSection(currentLang);
  updateProjectsSection(currentLang);
});