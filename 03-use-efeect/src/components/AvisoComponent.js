import React, { useEffect } from 'react'

const AvisoComponent = () => {

  useEffect(() => {
    alert("Componente montado")
    return () => {
      alert("COMPONENTE DESMONTADO")
    }
  }, [])

  // useEffect(()=>{

  // },[])

  return (
    <div>
      <h1>Saludos Nano!</h1>
      <button
      onClick={(e=>{alert("Bienvenido")})}>Mostrar alerta</button>
    </div>
  )
}

export default AvisoComponent
