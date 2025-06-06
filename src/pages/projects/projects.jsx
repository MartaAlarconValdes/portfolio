import "./projects.css";
import { Container } from "../../components/container/container";
import { projectsDone } from "../../utils/constants";


export function Projects(){
    return(
        <main id="projects">
            <header className="header-title">
                <h1>Proyectos</h1>
            </header>
            <div className="projects-container">
                {projectsDone.map((project) => (
                    <Container key={project.name} {...project} />
                ))}
            </div>
        </main>
    );
}

