import { useState } from 'react';
import { Link } from 'react-router-dom';

import { deletePerson } from '../services/api';

const Baja = () => {

  const [id, setId] = useState();

  const delPerson = () => {
    console.log(id)
    deletePerson(id)
  }

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
        <input type="number" onChange={e => setId(e.target.value)}/>
        <button onClick={delPerson}>Delete</button>
      </div>
    </div>
  )
}

export default Baja;