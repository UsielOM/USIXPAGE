import React from "react";
import "./MxxmeNavBar.css";

function MxxmeNavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            USIXPAGE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Bienvenidos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tips
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Prueba
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MxxmeNavBar;
