import React from 'react';
import './style.css';
import Layout from '../layout.js';

const Contacto = ({}) => {
    return (
        <Layout>
            <div className="Contacto">
                <div className="C">
                    <h1>Contacto</h1>
                    <p>
                        ¡Nos encantaría saber de ti! En Veterina, estamos aquí para ayudarte con cualquier pregunta o inquietud que puedas tener. Ya sea que necesites programar una cita,
                        tengas alguna consulta sobre nuestros servicios, o simplemente quieras saber más sobre cómo podemos cuidar a tu mascota, nuestro equipo está listo para asistirte.
                    </p>
                </div>
                <div className="FC">
                    <h3>Formas de Contacto</h3>
                    <div>
                        <b>Teléfono:</b>
                        <p>(+54) 11 4550 7880<br />
                            Lunes a Sábados: 9:00 AM - 4:00 PM
                        </p>
                    </div>
                    <div className="CE">
                        <b>Correo Electrónico:</b>
                        <p>
                            veterina.animales@gmail.com<br />
                            Estamos disponibles para responder tus consultas por correo electrónico durante nuestro horario de atención. Trataremos de responderte a la brevedad.
                        </p>
                    </div>
                    <div className="D">
                        <b>Dirección:</b>
                        <p>
                            Av. Corrientes 4334
                        </p>
                    </div>
                    <div className="HA">
                        <b>Horario de Atención:</b>
                        <p>
                            Lunes a Sábados: 9:00 AM - 4:00 PM<br />
                            Domingos: Cerrado
                        </p>
                    </div>
                </div>
                <p>Para cualquier otra consulta, no dudes en llamarnos o enviarnos un mensaje. ¡Estamos aquí para ayudarte a ti y a tu mascota en todo lo que necesites!</p>
            </div>
        </Layout>
    );
};

export default Contacto;
