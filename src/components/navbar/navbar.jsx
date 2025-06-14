import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../utils/constants";

export function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleClick = (to) => {
    toggleMenu();
    const targetElement = document.getElementById(to);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <header className="nav-container">
        <svg
          width="40"
          height="39"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9778 49C26.5743 49 27.8824 47.825 28.1041 46.162C30.299 31.3511 32.3167 29.2892 46.5513 27.6707C48.1918 27.4711 49.4557 26.0965 49.4557 24.5001C49.4557 22.8814 48.2141 21.5512 46.5733 21.3073C32.4276 19.334 30.6761 17.6045 28.1041 2.81596C27.8158 1.17521 26.552 0 24.9778 0C23.3594 0 22.0732 1.17521 21.8073 2.83801C19.6566 17.6268 17.639 19.6888 3.42667 21.3073C1.74159 21.5291 0.5 22.8594 0.5 24.5001C0.5 26.0965 1.69726 27.4268 3.38234 27.6707C17.5501 29.6883 19.2795 31.3955 21.8073 46.1843C22.1398 47.8471 23.4257 49 24.9778 49Z"
            fill="#0C0C0C"
          />
        </svg>
        <button onClick={toggleMenu} className="nav-btn">
          <span className="material-symbols-outlined">
            {menu ? "close" : "menu"}
          </span>
        </button>
        <nav className={`nav ${menu ? "isOpen" : ""}`}>
          <ul className="nav-list">
            {routes.map((route) => (
              <li className="nav-item" key={route.route}>
                <NavLink
                  className={`nav-link ${
                    location.pathname === route.to ? "isActive" : ""
                  }`}
                  to={route.to}
                  onClick={() => {
                    handleClick(route.route);
                  }}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
