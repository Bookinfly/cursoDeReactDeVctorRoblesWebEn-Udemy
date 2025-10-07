import React, { useState, useEffect } from "react";
import AvisoComponent from "./AvisoComponent";

export const PruebasComponents = () => {

  const [usuario, setUsuario] = useState("nano")
  const [fecha, setFecha] = useState("01/01/1999")
  const [contador, setContador] = useState(0)

  const modUsuario = (e)=> {
    setUsuario(e.target.value)
  }

  useEffect(()=>{
    console.log("Has cargado el componente PruebasComponent !!")
  }, []) 

  useEffect(()=>{
    console.log("Has modificado el ususario o fecha !!")
    setContador(contador + 1)
    console.log("Has modificado el usuario: " + contador)
  }, [ usuario, fecha ]) 

  const cambiarFecha = (e) => {
    setFecha(new Date().toLocaleDateString())
  }

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
      <strong className={ contador >= 10 ? 'label label-green' : 'label' }>{usuario}</strong>
      <strong className="label">{fecha}</strong>
      <p>
        <input 
          type="text" 
          onChange={ modUsuario } 
          placeholder="Cambia el Nombre"
        ></input>

        <button onClick={cambiarFecha}>Cambiar Fecha</button>
      </p>
      {usuario === "Nano" && <AvisoComponent/ >}
    </div>
  )
}