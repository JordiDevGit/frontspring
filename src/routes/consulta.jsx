import { Link } from 'react-router-dom';
import { getPersons } from '../services/api';
import { useEffect, useState } from 'react';

const Consulta = () => {
  const [personas, setPersonas] = useState([]);

useEffect(() => {
  getPersons().then((persona) => {
    setPersonas(persona.data)
  })}, [])

  return(
    <div>  
      <div className='header'>
        <ul className='navbar'>
          <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="/alta" className='link'>Alta</Link></li>
          <li><Link to="/baja" className='link'>Baja</Link></li>
          <li><Link to="/consulta" className='link'>Consulta</Link></li>
        </ul>
      </div>  
      <div>
        <table>
          <caption>
            Estas son las personas existentes en la base de datos
          </caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">DNI</th>
              <th scope="col">Fecha nacimiento</th>
            </tr>
            <tbody>
              {personas?.map((persona) => {
                return (
                  <tr key={persona.id}>
                    <th>{persona.id}</th>
                    <td>{persona.name}</td>
                    <td>{persona.surnames}</td>
                    <td>{persona.dni}</td>
                    <td>{persona.birthdate}</td>
                  </tr>
                )
              })}
            </tbody>
          </thead>
        </table>
      </div>
    </div>
  )   
}

export default Consulta;