import React from 'react';
import './style.css';
import Layout from '../layout.js';

const About = () => {
    return (
        <Layout>
            <div className="About">
                <h1>¿Quienes somos?</h1>
                <div className="team-container">
                    <div className="team-member">
                        <img src="https://i.ibb.co/0KyP0Rv/eitan.jpg" alt="" style={{width:"100%", borderRadius:"100%", margin:"1%"}}/>
                        <h2>Eitan</h2>
                    </div>
                    <div className="team-member">
                    <img src="https://i.ibb.co/B6RrRth/emilia.jpg" alt="" style={{width:"100%", borderRadius:"100%", margin:"1%"}}/>
                        <h2>Emi</h2>
                    </div>
                </div>
            </div>
            <div className="About">
                <h1>Sobre Nosotros</h1>
                <div className="card-container">
                    <div className="card">
                        <h2>Compromiso con el Cuidado</h2>
                        <p>
                            En veterinaria Veterina, entendemos que tu mascota no es solo un animal de compañía, sino un miembro querido de tu familia.
                            Por eso, nuestra misión es ofrecer un cuidado excepcional y personalizado a cada uno de nuestros pacientes, asegurando su bienestar y salud.
                        </p>
                    </div>
                    <div className="card">
                        <h2>Equipo de Profesionales</h2>
                        <p>
                            Somos un equipo de profesionales apasionados por la veterinaria, comprometidos con brindar el mejor servicio y atención a tus amigos peludos.
                            Nuestro equipo está compuesto por veterinarios altamente capacitados, técnicos en salud animal y personal de apoyo, todos dedicados a ofrecer un cuidado integral y de calidad.
                        </p>
                    </div>
                    <div className="card">
                        <h2>Gestión de Citas</h2>
                        <p>
                            En nuestro esfuerzo por facilitar la gestión de tus visitas, hemos implementado un innovador sistema de gestión de citas que te permite programar, modificar y cancelar tus citas de manera sencilla y eficiente.
                            Sabemos que tu tiempo es valioso, y queremos hacer todo lo posible para que la experiencia con nosotros sea lo más fluida y conveniente posible.
                        </p>
                    </div>
                    <div className="card">
                        <h2>Comunicación y Transparencia</h2>
                        <p>
                            Creemos en la importancia de la comunicación y la transparencia, y por eso estamos aquí para responder a todas tus preguntas y preocupaciones.
                            Nuestra meta es crear una experiencia positiva tanto para ti como para tu mascota, asegurando que cada visita sea eficiente, sin estrés y altamente efectiva.
                        </p>
                    </div>
                </div>
                <div className="contact-info">
                    <p>
                        ¡Gracias por confiar en Veterina para el cuidado de tu querido compañero! Estamos aquí para ayudarte y para asegurarnos de que cada cita sea una experiencia agradable y productiva.
                        Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nosotros. ¡Esperamos verte pronto!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
