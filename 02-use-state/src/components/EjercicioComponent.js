import React, { useState } from 'react'
// import PropTypes from "prop-types DEPRECADO"

const EjercicioComponent = ({year}) => {
  const [yearNow, setYearNow] = useState(year)

  
    const siguiente = e => {
      setYearNow( yearNow + 1)
    }  

    const anterior = e => {
      setYearNow( yearNow - 1)
    }

    if (!Number.isInteger(year)) {
      console.error("Year no es un número")
    }

    const cambiarYear = (e)=> {
      let dato = e.target.value

      if(Number.isInteger(dato)){
        setYearNow(dato)
      } else if (Number.isInteger(parseInt(dato))){
        setYearNow(parseInt(dato))
      } else {
        setYearNow(year)
      }

    }


  return (

    <div>
      <h2>Ejercicio con Eventos y useState</h2>
      <p>
        <strong>{yearNow}</strong>
      </p>
      <div>
        <button onClick={anterior} >Anterior</button>

        <button onClick={siguiente} >Siguiente</button>
      </div>
      <p>Cambiar año:
        <input type='text' placeholder='Cambia el año' onChange={cambiarYear}></input>
      </p>

    </div>
  )
}

// EjercicioComponent.propTypes = {
//   year: PropTypes.number.isRequired
// dEPRECADO
// }

export default EjercicioComponent
