/*Segundo punto en donde se simula un minutero:
si son menor a 3 minutos el valor es 100
si es mayor a 3 minutos se va sumando 50 por cada minuto extra*/ 
import { useState } from "react";

export const P2 =()=>{
    
    const [minutos, setMinutos] = useState('')

    const calcularPrecio =()=>{

        let valor=0

        if (minutos<=2){
            valor = 100
        }else {
            valor= 100 +(minutos - 2) * 50
        }
        
        
        console.log(valor)
    
    }

    const ponerMin =(e)=>{
        setMinutos(e.target.value)
    }
    return(
        <>
        <h1>
         Minutero
        </h1>
    
        <input
        type="number"
        placeholder ="ingrese minutos"
        value={minutos}
        onChange={(even)=> ponerMin(even)}>
        </input>
        <button onClick={()=> calcularPrecio()}> Convertir</button>
        </>
    )


}