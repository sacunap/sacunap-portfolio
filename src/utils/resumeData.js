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
      link: "https://www.linkedin.com/in/sixto-acuna-fullstack-developer",
      text: "Mi LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/sacunap",
      text: "Mi Github",
      icon: <GitHubIcon />,
    },
  },
  about: `Hola ! Soy Sixto Acuña, Ingeniero Químico y Full Stack Web Developer en HENRY. Con conocimiento en: JavaScript, HTML, CSS, Git / GitHub, React, React Native, NodeJS, Express JS, GraphQL, MongoDB, Metodología SCRUM.  
  
  Sobre mí, bueno, me considero una persona relajada, siempre abierto a socializar y dispuesto a trabajar en equipo. En cuanto a la tecnología, soy un curioso, a menudo leo artículos de Medium y FreeCodeCamp para saber más de este mundo, así como también tomar notas, inspirarme y mantenerme al tanto de las nuevas tecnologías. 

  En mi tiempo libre, me gusta leer libros policiales, ver series, disfrutar de los videojuegos y la buena música. De vez en cuando me junto con mis amigos para conversar de la vida y pasar un momento agradable. Soy una persona soñadora, ansío poder viajar y conocer lugares nuevos.
  `,

  education: [
    {
      title: "FullStack Web Developer - HENRY Bootcamp",
      date: "Oct 2020 - Feb 2021",
      description:
        "Bootcamp +700 horas de programación basado en prácticas y proyectos reales.",
    },
    {
      title: "Ingeniero Químico - USACH",
      date: "2014 - 2019",
      description:
        "Titulado de Ingeniería de ejecución en química de la Universidad de Santiago de Chile.",
    },
  ],
};
