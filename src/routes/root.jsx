import { Link } from 'react-router-dom';

const Home = () => (
        <div>    
          <div className='header'>
            <ul className='navbar'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/alta">Alta</Link></li>
              <li><Link to="/baja">Baja</Link></li>
              <li><Link to="/consulta">Consulta</Link></li>
            </ul>
          </div>  
        </div>
)

export default Home;