import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';



const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    const [nombre, guardarNombre]=useState('');
    const [cantidad,guardarCantidad] = useState(0);
    const [error, guardarError]=useState(false);
    
    


    //cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //validar gasto
        if(cantidad < 1 || isNaN( cantidad )|| nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
      


        //costruir el gasto
        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()

        }


        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);


        // resetear el form
        guardarNombre('');
        guardarCantidad(0);


    }







    return ( 
        <form
           onSubmit={agregarGasto}
        >
            <h2>Registra tus Gastos</h2>
            {error ?<Error mensaje='Ambos campos son Obligatorios o Presupuesto incorrecto'/>
            : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ejm. Alimentacion"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}

                />

                <label>Cantidad de Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ejm. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
                <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto" 

                />

            </div>
        </form>

     );
}
 
export default Formulario;