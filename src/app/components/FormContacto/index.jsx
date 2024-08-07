import React from 'react';
import { style } from './style'
import BotonForm from "../BotonForm";

const FormContacto= ()=>{
    return(
        
          <form style={style.form}>
              <div style={style.div}>
                  <label style={style.label}><b>Nombre</b></label>
                  <input type="text" required="" style={{margin:"5px",padding:"2%",borderRadius:"5px", border:"0"}}></input>
              </div>

              <div style={style.div}>
                <label style={style.label}><b>Email</b></label>
                <input type="email" required="" style={{margin:"5px",padding:"2%",borderRadius:"5px", border:"0"}}></input>
              </div>

              <div style={style.div}>
                <label style={style.label}><b>Mensaje</b></label>
                <textarea name="mensaje" rows="4" required="" style={{marginTop:"5px",borderRadius:"10px"}}></textarea>
              </div>

              <BotonForm text='Enviar'/>
                
            </form>
            
        );
    }
          

export default FormContacto;