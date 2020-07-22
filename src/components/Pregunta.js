
import React, { Fragment, useState } from 'react';
import Error from './Error';



const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

    // definir State
    const [cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]=useState(false);

    //Funcion que define el presupuesto 
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value,10));
    }

    //submit para definir presupueseto
    const agregarPresupuesto = e => {
        e.preventDefault();
    
    //valida
    if(cantidad < 1 || isNaN( cantidad )){
        guardarError(true);
        return;
    }



    // si pasa la validacion 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);



    }


    return ( 
        <Fragment>
            <h2>Introduzca su Presupuesto </h2>
            {error ? <Error mensaje = "El Presupuesto es Incorrecto"/> : null}
               <form
                onSubmit={agregarPresupuesto}
               >
                  
                   <input
                     type ="number"
                     className="u-full-width"
                     placeholder="Coloca tu Presupuesto"
                     onChange={definirPresupuesto}
                   />

                   <input
                   type="submit"
                   className="button-primary u-full-width"
                   value="Definir Presupesto"
              
                    />
               </form>
        </Fragment>
     );
}
 
export default Pregunta;