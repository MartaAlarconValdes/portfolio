import "./about.css";
import { technicalSkills } from "../../utils/constants";
import { softSkills } from "../../utils/constants";

export function About() {
  return (
    <main id="about">
      <div className="about-me-container">
        <div className="about-me-title">
          <img src="./star.svg" alt="" />
          <h2>Sobre mí</h2>
        </div>
        <p>
          Desarrolladora full-stack junior especializada en aplicaciones multiplataforma y desarrollo de videojuegos. Apasionada por la tecnología, la innovación y la creación de experiencias digitales que aporten valor. Actualmente, me preparo para comenzar un máster en Big Data e Inteligencia Artificial, con el objetivo de ampliar mis conocimientos y explorar nuevas áreas del desarrollo tecnológico.

        </p>
        <p>
          Durante mi formación, he trabajado con tecnologías como C#, .NET, React, JavaScript y Unity, participando en el desarrollo de aplicaciones y videojuegos tanto a nivel técnico como creativo. Me interesa especialmente la combinación de desarrollo, análisis de datos e inteligencia artificial para construir soluciones inteligentes y funcionales.
        </p>
        <p>
          He colaborado en proyectos multidisciplinares junto a otros desarrolladores y diseñadores, donde he demostrado ser una persona proactiva, adaptable y con gran atención al detalle. Busco mi primera oportunidad profesional en el sector, donde pueda seguir aprendiendo, aportar mis conocimientos y crecer dentro de un equipo comprometido con la innovación y la mejora continua.
        </p>
      </div>
      <div className="skills-container">
        <div className="personal-skills-container">
        <div className="personal-skills-title">
        <img src="./heart.svg" alt="" />
          <h2>Habilidades</h2>
      </div>

          <ul>
            {softSkills.map((item) => (
              <li>
                <p>{item}</p>
              </li>
            ))}
          </ul>


        </div>
        <div className="technical-skills-container">
          <div className="technical-skills-title">
                  <img src="./sharp.svg" alt="" />
          <h2>Tecnologías</h2>
          </div>
          <ul>
            {technicalSkills.map((item) => (
              <li>
                <img width={50} src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
       

      </div>
      
       
    </main>
  );
}
