"use client"
import {style} from  "./style";
import Formulario from "../components/Formulario";
import Layout from '../layout.js';

const Date = () =>{

    return (
        <Layout>
            <div style={style.flex}>
                <h1 style={style.h1}>¡Reserva tu turno ahora!</h1>
                
                     <div className="card" style={style.card}>
                        <Formulario/>   
                    </div>
                
            </div>
        </Layout>
    )
}
export default Date;