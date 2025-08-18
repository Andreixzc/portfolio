export const siteConfig = {
  name: "Andrei Massaini",
  title: "Software Engineer & Computer Science Student",
  description: "Portfolio website of Andrei Massaini - Software Engineer specializing in full-stack development and machine learning",
  accentColor: "#60a5fa",
  profileImage: "/port/picture.jpg",
  social: {
    email: "andrei.massaini@hotmail.com",
    linkedin: "https://linkedin.com/in/andrei-massaini-b93312250",
    twitter: "",
    github: "https://github.com/Andreixzc",
    resume: "/port/AndreiCvEN2025.pdf",
  },
  aboutMe:
    "Computer Science student at PUC Minas with experience in full-stack development and machine learning. Currently working as a Software Engineer Intern at Gedanken, developing supplier homologation platforms with Python, Django, and GraphQL. Focus on creating practical solutions that bridge technology and real-world applications, with expertise in web development, AI, and data science.",
  skills: [
    { name: "Java", icon: "fab fa-java", color: "#f89820" },
    { name: "Python", icon: "fab fa-python", color: "#3776ab" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "#f7df1e" },
    { name: "React", icon: "fab fa-react", color: "#61dafb" },
    { name: "Angular", icon: "fab fa-angular", color: "#dd0031" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
    { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "GitHub", icon: "fab fa-github", color: "#181717" },
    { name: "Database", icon: "fas fa-database", color: "#336791" },
    { name: "Code", icon: "fas fa-code", color: "#6b7280" }
  ],
  projects: [
    {
      name: "Cell Recognition for Pap Smear Exams",
      description:
        "Developed an AI-powered application for automated cytological classification. Implemented feature extraction using Hu's moments and texture analysis. Trained CNN and XGBoost models, achieving 95.16% (XGBoost) and 80.64% (EfficientNet) accuracy.",
      link: "https://github.com/Andreixzc/Pap-smear-CellClassification",
      skills: ["Python", "TensorFlow", "XGBoost", "Computer Vision", "Machine Learning"],
    },
    {
      name: "Arborescence Comparison in Directed Graphs",
      description:
        "Implemented and benchmarked Edmonds' algorithm and GGST for minimum arborescence detection. Conducted comparative analysis on large-scale graph datasets, assessing algorithmic efficiency with performance visualization.",
      link: "https://github.com/Andreixzc/arborescence-comparasion",
      skills: ["Python", "Graph Algorithms", "Data Analysis", "Visualization"],
    },
    {
      name: "Water Quality Monitoring System",
      description:
        "Engineered a real-time water quality monitoring system integrating machine learning and remote sensing. Developed predictive models leveraging satellite spectral reflectance for environmental monitoring.",
      link: "",
      skills: ["Python", "TensorFlow", "Remote Sensing", "Environmental Science"],
    },
  ],
  experience: [
    {
      company: "Gedanken",
      title: "Software Engineer Intern",
      dateRange: "Mar 2025 - Present",
      bullets: [
        "Developed and maintained web-based supplier homologation platform using Python and Django",
        "Implemented new features and system enhancements for supplier onboarding and compliance processes",
        "Built and optimized GraphQL APIs to improve data retrieval efficiency and system interoperability",
        "Maintained and enhanced PostgreSQL database operations, ensuring data integrity and performance",
      ],
    },
    {
      company: "Brandt Meio Ambiente",
      title: "Machine Learning Intern",
      dateRange: "Aug 2024 - Mar 2025",
      bullets: [
        "Engineered a real-time water quality monitoring system integrating machine learning and remote sensing",
        "Developed predictive models leveraging satellite spectral reflectance for water quality estimation",
        "Processed spatiotemporal geospatial data using Python, TensorFlow, and scikit-learn",
        "Collaborated with environmental scientists to refine model accuracy and interpretability",
      ],
    },
    {
      company: "PUC Tec",
      title: "Full Stack Development Intern",
      dateRange: "Aug 2024 - Dec 2024",
      bullets: [
        "Developed scalable RESTful APIs, enhancing system interoperability and efficiency",
        "Designed and optimized database schemas, reducing query execution time by 30%",
        "Built dynamic, responsive UIs using Angular for multiple enterprise projects",
      ],
    },
  ],
  education: [
    {
      school: "Pontifical Catholic University of Minas Gerais (PUC Minas)",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2021 - 2025",
      achievements: [
        "Specialized in Software Engineering and Machine Learning",
        "Completed multiple internships in full-stack development and AI",
        "Strong foundation in algorithms, computer architecture",
        "Focus on writing efficient, maintainable, and scalable code",
      ],
    },
  ],
  trivia: [
    {
      text: "Competitive swimmer",
      image: "/port/swim.jpg"
    },
    {
      text: "Former Dota 2 competitive player",
      image: "/port/dota2.png"
    },
    {
      text: "Guitar enthusiast", 
      image: "/port/guitar.png"
    }
  ],
};
