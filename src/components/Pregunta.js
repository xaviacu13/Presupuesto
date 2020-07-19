
import React, { Fragment } from 'react';
const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>Introduzca su presupuesto </h2>
               <form>
                   <input
                     type ="number"
                     className="u-full-width"
                     placeholder="Coloca tu Presupuesto"
                     value="Definir presupuesto"
                   />

                   <button
                   typy="submit"
                   className="button-primary u-full-width"
                   value="Definir Presupesto"
              
                   >Definir Presupesto</button>
               </form>
        </Fragment>
     );
}
 
export default Pregunta;