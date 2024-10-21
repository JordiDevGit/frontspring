import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './routes/root';
import Alta from './routes/alta';
import Baja from './routes/baja';
import Consulta from './routes/consulta';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/alta" element={<Alta/>} />
            <Route path="/baja" element={<Baja/>} />
            <Route path="/consulta" element={<Consulta/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;