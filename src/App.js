
import Inicio from './inicio';
import Encabezado from './Encabezado';
import { Routes , Route} from 'react-router-dom'
import Productos from './Productos';
import Contacto from './Contacto';

function App() {
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path= '/' element={<Inicio/>} />
        <Route path= '/Contacto' element={<Contacto/>} />
        <Route path= '/Productos' element={<Productos/>} />
      </Routes>
    </>
  );
}

export default App;