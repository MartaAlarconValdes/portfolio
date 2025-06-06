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
            <a href="/cvMartaAlarcon.pdf" target="_blank" rel="noreferrer">
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
          <img src="./photo.png" alt="" />
        </div>
      </section>
      <section className="divider">
      </section>
    </main>
  );
}
