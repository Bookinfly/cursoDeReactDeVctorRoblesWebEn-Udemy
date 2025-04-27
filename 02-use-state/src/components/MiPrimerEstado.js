import React, {useState} from 'react'

export const MiPrimerEstado = () => {
  // No funciona en React
  // let profe = "Victor Robles"
  // const cambiarNombre = e => {
  //   profe = "PaquitoFernandez"
  const [ profe, setProfe ] = useState("Víctor Robles")

  const cambiarProfe = (e, profeFijo) => {
    setProfe(profeFijo)
  }


  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <strong className='label'>
        {profe}
      </strong>
      &nbsp;
      <button onClick={ e => cambiarProfe(e, "Dalto") }>Cambiar</button>
      &nbsp;
      <input type='text' placeholder='Cambia el profe' onChange={ e => cambiarProfe(e, e.target.value) }/>
    </div>
  )
}