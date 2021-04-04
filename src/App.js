import logo from "./logo.svg";
import "./App.css";
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button className="py-2 px-6 bg-blue-500 text-white rounded">
            Hit me
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
