import './App.css';
import Menu from './comps/Menu'
import Recipes from './comps/Recipes';
import Search from './comps/Search';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className="p-4">Ricette Vegetariane</h1>
          <Menu />
        </header>
        <div className="search">
        <Search />
        </div>
        <div className="complete-meal">
          <h2>Pasto completo</h2>
            <Recipes />
        </div>
        <div className="international">
          <h2>Ricette vegetariane dal mondo</h2>
            <Recipes />
        </div>
      </div>
    </div>
  );
}

export default App;