import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default {
  name: "Sixto Acuña",
  title: "FullStack Web Developer",
  email: "sixto.acunap@gmail.com",
  address: "Santiago, Chile",
  phone: "+56 9 8422 4592",
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/sixto-acuna-fullstack-developer/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/sacunap",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  about: `Ingeniero químico y estudiante pronto a egresar de Full Stack Web Developer en HENRY, con conocimiento en: JavaScript, HTML, CSS, Git / GitHub, React / React-hooks / React-Redux, NodeJS, Express JS, Metodología SCRUM.
  
  Profesional con gran apertura a nuevos aprendizajes, proactivo, motivado, innovador, orientado a resultados, motivación por el logro y trabajo en equipo con capacidad para integrar grupos profesionales multidisciplinarios en busca de una meta común. 
  
  Con destacadas habilidades de comunicación efectiva, de rápida adaptación a diferentes tareas laborales y una clara disposición al cumplimiento de tareas.`,

  education: [
    {
      title: "FullStack Web Developer - HENRY Bootcamp",
      date: "Oct 2020 - Feb 2021",
      description: "Bootcamp +700 horas de programación basado en prácticas y proyectos reales."
    },
    {
      title: "Ingeniero químico - USACH",
      date: "2014 - 2019",
      description: "Titulado de Ingeniería de ejecución en química de la Universidad de Santiago de Chile."
    },
  ]
};
