"use client"
import {style} from  "./style";
import Formulario from "../components/Formulario";
import Layout from '../layout.js';

const Date = () =>{

    return (
        <Layout>
            <div style={style.flex}>
                <h1 style={style.h1}>Listado de usuarios: </h1>
                <div class="cards">
                     <div class="card">
                        <Formulario/>   
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Date;