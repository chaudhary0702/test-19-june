import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>


    </>
  );
}

export default App;
