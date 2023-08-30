/*Tercer punto en donde se hace un saludo según la hora ingresada por el usuario*/
import React, { useState } from "react";

export const P3 = () => {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState('');

  const determinarHora = () => {
    const nuevoDato = {
      nombre: nombre,
      horas: parseInt(horas) // Convertir a número entero
    };

    let mensaje = '';

    if (nuevoDato.horas >= 0 && nuevoDato.horas < 12) {
      mensaje = `Buenos días, ${nuevoDato.nombre}`;
    } else if (nuevoDato.horas >= 12 && nuevoDato.horas < 18) {
      mensaje = `Buenas tardes, ${nuevoDato.nombre}`;
    } else {
      mensaje = `Buenas noches, ${nuevoDato.nombre}`;
    }

    setDatos(lista => [...lista, { ...nuevoDato, mensaje }]);
    setNombre('');
    setHoras('');
    console.log(mensaje)
  };

  const ponerNom = (e) => {
    setNombre(e.target.value);
  };

  const ponerHora = (e) => {
    setHoras(e.target.value);
  };

  return (
    <>
      <h1>Horario</h1>

      <input
        type="text"
        placeholder="Escriba su nombre"
        value={nombre}
        onChange={(event) => ponerNom(event)}
      />
      <input
        type="time"
        placeholder="Hora"
        value={horas}
        onChange={(event) => ponerHora(event)}
      />

      <button onClick={()=> determinarHora()}>Saludame</button>
      

      <ol>
        {datos.map((dato, indice) => (
          <li key={indice}>
            <span>{dato.mensaje}</span>
            
          </li>
        ))}
      </ol>
    </>
  );
};