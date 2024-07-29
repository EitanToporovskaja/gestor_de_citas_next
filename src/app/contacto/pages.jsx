import React from 'react';
import './style.css'
import Layout from '../layout';

const Contacto = ({params}) => {
    return(
        <Layout>
            <div class="Contacto">
                <div class ="C">
                    <h1>Contacto</h1>
                    <p>
                        ¡Nos encantaría saber de ti! En Veterina, estamos aquí para ayudarte con cualquier pregunta o inquietud que puedas tener. Ya sea que necesites programar una cita, 
                        tengas alguna consulta sobre nuestros servicios, o simplemente quieras saber más sobre cómo podemos cuidar a tu mascota, nuestro equipo está listo para asistirte.
                    </p>
                </div>
                <div class ="FC">
                    <h3>Formas de Contacto</h3>
                    <div>
                        <b>Teléfono:</b>
                        <p> 1234567890
                            Lunes a Viernes: 9:00 AM - 6:00 PM
                            Sábados: 9:00 AM - 2:00 PM
                        </p>
                    </div>
                    <div class ="CE">
                        <b>Correo Electrónico:</b>
                        <p>
                            Veterina@gmail.com
                            Estamos disponibles para responder tus consultas por correo electrónico durante nuestro horario de atención. 
                            Trataremos de responderte a la brevedad.
                        </p>
                    </div>
                    <div class ="D">
                        <b>Dirección:</b>
                        <p>
                            Calle falsa 1234
                            Ciudad linda, pais existente, codigo postal 0000
                        </p>
                    </div>
                    <div class ="HA">
                        <b>Horario de Atención:</b>
                        <p>
                        Lunes a Viernes: 9:00 AM - 6:00 PM
                        Sábados: 9:00 AM - 2:00 PM
                        Domingos: Cerrado
                        </p>
                    </div>
                </div>
                <p>Para cualquier otra consulta, no dudes en llamarnos o enviarnos un mensaje. ¡Estamos aquí para ayudarte a ti y a tu mascota en todo lo que necesites!</p>
            </div>
        </Layout>
    )
}
export default Contacto;