import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Persons from './Components/Persons/Persons';

function App() {

  return ( <
    div className = "container" >
    <
    h2 className = 'text-center text-primary py-3' > BasketBall Player Selection < /h2> <
    div className = "d-flex flex-wrap" >
    <
    Persons > < /Persons> < /
    div > <
    /div>
  );
}

export default App;