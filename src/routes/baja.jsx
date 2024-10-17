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
          <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="/alta" className='link'>Alta</Link></li>
          <li><Link to="/baja" className='link'>Baja</Link></li>
          <li><Link to="/consulta" className='link'>Consulta</Link></li>
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