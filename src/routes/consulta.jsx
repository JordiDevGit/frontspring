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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/alta">Alta</Link></li>
          <li><Link to="/baja">Baja</Link></li>
          <li><Link to="/consulta">Consulta</Link></li>
        </ul>
      </div>  
      <div>
        <ul>
          {personas?.map((persona) => {
            return (
            <li key={persona.id}>{persona.id} - {persona.name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )   
}

export default Consulta;