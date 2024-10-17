import { Link } from 'react-router-dom';

const Home = () => (
        <div>    
          <div className='header'>
            <ul className='navbar'>
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to="/alta" className='link'>Alta</Link></li>
              <li><Link to="/baja" className='link'>Baja</Link></li>
              <li><Link to="/consulta" className='link'>Consulta</Link></li>
            </ul>
          </div>  
        </div>
)

export default Home;