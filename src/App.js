import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';


function App() {
<<<<<<< HEAD

=======
  const [contador,setContador]=useState(0) 
  
  const add =()=>{
    setContador(contador+1)
  }
>>>>>>> 38e3c936234c83e4af3c4ee96d2999240e92fab1
  return (
    <div className="App">
      <header className="App-header">
        <Navbar contador={contador}/> 
      </header>
      <main>
        <ItemListContainer add={add}/>
      </main>
    </div>
  );
}

export default App;
