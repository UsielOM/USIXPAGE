import React from "react";
import './Onboarding.css'


function Onboarding() {
  return (
    <>
    <div id="onboardingContainer" className="bodyOnboarding">
        <header className = "bg-dark py-5 w-100">
            <div className="container px-5">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className= "display-5 fw-bolder text-white mb-2">
                                Bienvenidos a CODE MXXME
                            </h1>
                            <p className="lead fw-normal text-white-50 mb-4">
                                Hola soy MXXME y aqui encontraras diferentes herramientas que te ayudaran aprender prgramación desde cero, atrevete a explorar en este mundo tecnologico ¿Estas lista?
                            </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3">
                                        Entrar
                                    </a>
                                    <a className="btn btn-outline-light btn-lg px-4">
                                        Mis tips de programación
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <img className="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..."></img>
                    </div>
                </div>
            </div>
        </header>
    </div>
    </>
);
}

export default Onboarding;