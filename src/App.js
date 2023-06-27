
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Cards from './Pages/Cards';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <Nav />

      <Routes>
      <Route  path='/Home' element={<Home/>} />

      <Route  path='/Product' element={<Cards/>} />
      <Route  path="/Cart" element={<Cart/>} />

      </Routes>
    </>
  );
}

export default App;
