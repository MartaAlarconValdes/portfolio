import "./container.css";

export function Container({
    image, 
    name,
    shortDescription,
    technologies,
}){
    return(
        <div className="sketch-border"><div className="content">
            <img src={image} alt="" /> 
            <h4>{name}</h4>
            <p>{shortDescription}</p>
           <div className="tech-container">
                {technologies.map((tech, index) => (
                    <img key={index} src={tech} width={35} alt={`tech-${index}`} className="tech-icon"/>
                ))}
            </div>
            <div className="projects-btns">
            <a href="" target="_blank" rel="noreferrer">
                Descargar
            </a>
            <a href="" target="_blank" rel="noreferrer">
                Código
            </a>
            </div>
</div>
        </div>
    );
}