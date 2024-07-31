"use client"
import { useState , useEffect }from "react";
import {style} from  "./style";
import Formulario from "../components/Formulario";
import Layout from '../layout.js';

const Date = () =>{

    return (
        <Layout>
            <div style={style.flex}>
                <h1 style={style.h1}>Listado de usuarios: </h1>
                <div class="cards">
                    {/* <div class="card">
                        <Formulario/>   
                    </div> */}
                    <p>Hola</p>
                </div>
            </div>
        </Layout>
    )
}
export default Date;