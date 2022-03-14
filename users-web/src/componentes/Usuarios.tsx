import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    cargarUsuarios();
  }, [])

  const cargarUsuarios = async () => {

    const resp = await reqResApi.get<ReqResListado>('/users')

    setUsuarios(resp.data.data);
  }

  const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td >
          <img src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          /> {first_name} {last_name}
        </td>
      </tr>
    )
  }



  return (
    <>
      <h3>Usuarios</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Listado</th>
            <th>Informacion</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem)
          }
        </tbody>
      </table>
    </>
  )
}