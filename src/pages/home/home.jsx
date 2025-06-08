import "./home.css";



export function Home() {
  return (
    <main id="home">
      <section className="home-container">
        <div className="about">
          <h1>
            Desarrolladora <span>Full Stack</span>, especializada en videojuegos.
          </h1>
          <h2>
            Echa un vistazo a <span>mis proyectos</span>!
          </h2>
          <div className="cv-btn">
            <a href={`${process.env.PUBLIC_URL}/cvMartaAlarcon.pdf`} target="_blank" rel="noreferrer">
              CV
            </a>
          </div>
        </div>
        <div>
          <div className="name-container">
            <div className="name">
              <p>Hola! Soy Marta Alarcón.</p>
            </div>
          </div>
          <div className="photo-container">
              <img src={`${process.env.PUBLIC_URL}/photo.png`} alt="" />
              <div className="icon-container">
                  <a href="https://www.linkedin.com/in/marta-alarcon-valdes" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/MartaAlarconValdes" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
                  </a>
                  <a href="mailto:martaalarconvaldes@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/email.png`} alt="Email" />
                  </a>
              </div>
          </div>
        </div>
      </section>
      <section className="divider">
      </section>
    </main>
  );
}
