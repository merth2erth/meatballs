import meatballs from './images/meatballs.png';
import './App.css';
import Weather from './components/weatherComponent';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
        <img src={meatballs} alt="logo" height="250"/><p></p>
        <Button variant="contained" color="secondary">
          Meatball me!
        </Button>
        <p>
          What's the forecast?
        </p>
          <Weather />
    </div>
  );
}

export default App;
