import React, { useEffect } from 'react'
import { useState } from 'react'

const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([])

  const getUsuariosStaticos = ()=> {
    setUsuarios([{
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 2,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }])
  }

  useEffect(()=> {
    getUsuariosAjaxPms()
  }, [])

  const getUsuariosAjaxPms = () => {
    fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    })
    .then(respuesta => respuesta.json())
    .then(
      resultado_final => {
        setUsuarios(resultado_final.data)
        console.log(resultado_final)
      }, error => {
        console.error(error)
      }
    )
  }

  return (
    <div>
      <h2>Listado de ususrios vía AJAX</h2>
      <ol className='usuarios'>
        {usuarios.map(usuario => {
          return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
        })}
      </ol>
    </div>
  )
}

export default AjaxComponent
// GET https://reqres.in/api/users

