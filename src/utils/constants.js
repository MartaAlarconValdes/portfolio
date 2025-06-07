export const routes = [
  { to: "/", route: "home", name: "Inicio" },
  { to: "/about", route: "about", name: "Sobre mí" },
  { to: "/projects", route: "projects", name: "Proyectos" },
  { to: "/experience", route: "experience", name: "Experiencia" },
  { to: "/contact", route: "contact", name: "Contacto" },
];

export const softSkills = [
  "Trabajo en equipo",
  "Adaptabilidad",
  "Comunicación efectiva",
  "Proactividad",
  "Organización",
  "Capacidad de aprendizaje",
  "Escucha activa",
  "Creatividad",
  "Gestión del tiempo",
];

export const technicalSkills = [
  {
    icon: `${process.env.PUBLIC_URL}/csharp.png`,
    name: "C#",
  },
  {
    icon: `${process.env.PUBLIC_URL}/unity.png`,
    name: "Unity",
  },
  {
    icon: `${process.env.PUBLIC_URL}/dotnet.png`,
    name: ".NET",
  },
  {
    icon: `${process.env.PUBLIC_URL}/javascript.png`,
    name: "JavaScript",
  },
  {
    icon: `${process.env.PUBLIC_URL}/css.png`,
    name: "CSS3",
  },
  {
    icon: `${process.env.PUBLIC_URL}/postgresql.png`,
    name: "PostgreSQL",
  },
  {
    icon: `${process.env.PUBLIC_URL}/mongodb.png`,
    name: "MongoDB",
  },
  {
    icon: `${process.env.PUBLIC_URL}/react.png`,
    name: "React",
  },
  {
    icon: `${process.env.PUBLIC_URL}/blender.png`,
    name: "Blender",
  },
  {
    icon: `${process.env.PUBLIC_URL}/python.png`,
    name: "Python",
  },
];

export const jobExperience = [
  {
    duration: "Mayo 2024 - Junio 2024",
    position: "Prácticas Erasmus+ | Rumanía",
    companyName: "Predict Consulting",
    description:
      "Durante mi experiencia en prácticas Erasmus en Rumania, tuve la oportunidad de participar activamente en diversas tareas relacionadas con el beta testing de videojuegos. Mi rol consistía en identificar errores en las aplicaciones y colaborar de manera directa en la mejora de la experiencia de usuario, lo que me permitió desarrollar un enfoque crítico y detallista en cuanto a la calidad del software. Además, tuve la responsabilidad de apoyar en la implementación de código, especialmente utilizando Python, para incorporar funcionalidades específicas dentro de los proyectos en los que estuve involucrada. Esta experiencia me permitió afianzar mis habilidades de programación y mejorar mi capacidad para resolver problemas técnicos dentro de un entorno real de trabajo. Trabajé en estrecha colaboración con un equipo multidisciplinar en un entorno internacional, lo que no solo me permitió aprender de diferentes perspectivas profesionales, sino que también fortaleció mis habilidades de colaboración y adaptación. El trabajo en equipo fue esencial, ya que interactuamos con personas de diversas culturas y conocimientos, lo que enriqueció la experiencia. Finalmente, también participé activamente en tareas relacionadas con el diseño UI/UX, aportando ideas y sugerencias para mejorar la interfaz y la usabilidad de las aplicaciones. Esta experiencia me permitió combinar mi interés por el diseño con mi capacidad técnica, contribuyendo a hacer las aplicaciones más accesibles e intuitivas para los usuarios.",
  },
  {
    duration: "Agosto 2022 - Abril 2023",
    position: "Ayudante de cocina",
    companyName: "McDonald's",
    description:
      "Durante mi experiencia como ayudante de cocina en McDonald's, trabajé estrechamente con un equipo dinámico para asegurar una preparación de alimentos eficiente y el cumplimiento de los estándares de calidad y seguridad alimentaria. La colaboración con el equipo de cocina y sala fue clave para ofrecer un servicio rápido y de calidad, especialmente en momentos de alta demanda, donde trabajamos juntos para priorizar tareas y mantener la fluidez del trabajo. Me encargué de organizar el área de trabajo, asegurando que todo estuviera listo para el servicio. El compañerismo y la cooperación en el equipo fueron esenciales para cumplir con los objetivos en un entorno de alta presión.",
  },
];

export const projectsDone = [
  {
    image: `${process.env.PUBLIC_URL}/TicTacToe.png`,
    name: "Tres en raya con IA",
    shortDescription:
      "Juego clásico de 3 en raya donde puedes enfrentarte a una inteligencia artificial que toma decisiones estratégicas mediante el algoritmo Minimax, garantizando siempre el mejor movimiento posible.",
    technologies: [
      `${process.env.PUBLIC_URL}/unity.png`,
      `${process.env.PUBLIC_URL}/csharp.png`,
    ],
    code: "https://github.com/MartaAlarconValdes/MinimaxTicTacToe",
    video: `${process.env.PUBLIC_URL}/TicTacToe.mp4`,
  },
  {
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    name: "Portfolio",
    shortDescription:
      "Este propio portfolio es un proyecto en el que he estado trabajando para recopilar todos mis otros proyectos y experiencia. Diseñado y creado desde cero con mucha pasión y dedicación.",
    technologies: [
      `${process.env.PUBLIC_URL}/react.png`,
      `${process.env.PUBLIC_URL}/css.png`,
      `${process.env.PUBLIC_URL}/javascript.png`,
    ],
    code: "https://github.com/MartaAlarconValdes/portfolio",
    video: `${process.env.PUBLIC_URL}/Portfolio.mp4`,
  },
  {
    image: `${process.env.PUBLIC_URL}/shooter.png`,
    name: "Shooter de zombies",
    shortDescription:
      "Juego de acción en tercera persona en el que disparas a zombies que te atacan. Para ganar el juego deberás encontrar un objeto y entrar a una caseta. Animaciones sacadas de Mixamo.com y assets sacados de Unity Asset Store",
    technologies: [
      `${process.env.PUBLIC_URL}/unity.png`,
      `${process.env.PUBLIC_URL}/csharp.png`,
    ],
    code: "https://github.com/MartaAlarconValdes/RPG_Juego_MartaAlarcon",
    video: `${process.env.PUBLIC_URL}/DivorciaDOSVIDEO.mp4`,
  },
  {
    image: `${process.env.PUBLIC_URL}/divorciados.png`,
    name: "DivorciaDOS",
    shortDescription:
      "Proyecto final de curso junto a dos compañeros. Juego multijugador de puzzles en el que usamos Photon como servidor. Consiste en colaborar para resolver distintos puzzles a la vez que se cuenta una historia y se juega con las ilusiones ópticas.",
    technologies: [
      `${process.env.PUBLIC_URL}/unity.png`,
      `${process.env.PUBLIC_URL}/csharp.png`,
    ],
    code: "https://github.com/MartaAlarconValdes/DivorciaDOS",
    video: `${process.env.PUBLIC_URL}/DivorciaDOSVIDEO.mp4`,
  },
];
