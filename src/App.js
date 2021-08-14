import meatballs from './images/meatballs.png';
import './App.css';
import Weather from './components/weatherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={meatballs} className="App-logo" alt="logo" />
        <p>
          What's the forecast?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Weather />
        </a>
      </header>
    </div>
  );
}

export default App;
