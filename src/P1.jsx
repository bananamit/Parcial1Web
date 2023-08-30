/* Primer punto de pasar segundos a Horas, minutos y segundos mostrados en la consola*/ 

import { useState } from "react";

export const P1 = ()=>{

const [seg, setSeg]= useState("")   



const Conversor =()=>{

    const segundo = seg
    const segundos = (Math.round(segundo % 0x3C))
    const horas = (Math.floor(segundo/ 0xE10))
    const minutos = (Math.floor(segundo / 0x3C ) % 0x3C)
    
  
    
    console.log(`${horas} horas, ${minutos} minutos y ${segundos} segundos`)
}

const ponerSeg =(e)=>{
    setSeg(e.target.value)
}
return(
    <>
    <h1>
     Segundos a Horas
    </h1>

    <input
    type="number"
    placeholder ="ingrese segundos"
    value={seg}
    onChange={(even)=> ponerSeg(even)}>
    </input>
    <button onClick={()=> Conversor()}> Convertir</button>
    
    </>
)
}