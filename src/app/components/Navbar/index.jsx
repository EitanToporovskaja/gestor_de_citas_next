import React from 'react';
import {style} from "./style.jsx";
import Link from 'next/link.js';
import './styles.css';
const NavBar= ()=>{
    return(
        <nav style={style.nav}>

            <ul style={style.ul}>
                <li class='li' style={style.li}><Link style={style.a} href ="/">Home</Link> </li>
                <li class='li' style={style.li}><Link style={style.a} href ="/about">Sobre nosotros</Link> </li>
                <li class='li' style={style.li}><Link style={style.a} href ="/contacto">Contacto</Link> </li>
                <li class='li' style={style.li}><Link style={style.a} href ="/date">Turnos</Link> </li>
                
            </ul>
    </nav>  
    );

    
}
export default NavBar;