import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/Navbar/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <CartWidget/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </div>
  );
}

export default App;
