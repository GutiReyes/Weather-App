import { useState } from 'react'
import './App.css'
import Weather from './compononents/Weather';
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from './compononents/Loading';
import background from "./video/background.mp4";

function App() {

  const [loading,setLoading] = useState(false);

  const changeState = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },4000);
  }

  if(loading){
    return (
      <Loading/>
    )
  } else {

  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={background} type="video/mp4"/>
      </video>
      <Weather/>
      <button className='btn' onClick={() => changeState()}> Reload</button>
    </div>
  );
  }
}
export default App;
