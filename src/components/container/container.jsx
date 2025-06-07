import "./container.css";

export function Container({
    image, 
    name,
    shortDescription,
    technologies,
    code,
    video
}){
    return(
        <div className="sketch-border">
            <div className="content">
            <img width={320} height={260} src={image} alt="" /> 
            <h4>{name}</h4>
            <p>{shortDescription}</p>
           <div className="tech-container">
                {technologies.map((tech, index) => (
                    <img key={index} src={tech} width={35} alt={`tech-${index}`} className="tech-icon"/>
                ))}
            </div>
            <div className="projects-btns">
            <a href={video} target="_blank" rel="noreferrer">
                Visualizar
            </a>
            {}
            <a href={code} target="_blank" rel="noopener noreferrer">
                Código
            </a>

            </div>
        </div>
        </div>
    );
}