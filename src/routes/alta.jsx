import { useState } from 'react';
import { Link } from 'react-router-dom';
import { savePersonName } from '../services/api';

const Alta = () => {

  const [name, setName] = useState();

  const savePerson = () => {
    console.log(name)
    savePersonName({name})
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
        <input type="text" onChange={e => setName(e.target.value)}/>
        <button onClick={savePerson}>Save</button>
      </div>
    </div>
  )
}

export default Alta;