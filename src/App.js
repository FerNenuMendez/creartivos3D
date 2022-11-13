import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar/> 
      </header>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path='/categoria/:linea' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
