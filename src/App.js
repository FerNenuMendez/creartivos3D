import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import  CartProvider  from './context/cartProvider';



function App() {
  return (
  <CartProvider>
    <BrowserRouter>
        <header className="App-header">
          <Navbar/> 
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:linea' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
