import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';

//Un hook es una funcion que permite enganchar el estado de react y te permite trabajar con el siclo de vida del componenete

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React - Hook useState</h1>
        <MiPrimerEstado />
      </header>
    </div>
  );
}

export default App;
