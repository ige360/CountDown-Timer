import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Component/Footer';

function App() {

  const stopTime = new Date("2025-12-25T00:00:00");
  const currentTime = Date.now()

  const [timer, setTimer] = useState(stopTime-currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(stopTime-currentTime);
    } ,1000);

    return () => {
      clearInterval(interval);
    };
  }, [stopTime]);

  const days = Math.floor(timer / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timer / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (timer / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (timer / 1000) % 60
  );

  if (timer <= 0) {
    return <h1>🎉 Merry Christmas!</h1>;
  }

  return (
    <div className='container'>
        <h1>{days}<span className="one">Days</span>, {hours}<span className="two">Hours</span>, {minutes}<span className="three">Minutes</span>, {seconds}<span className="four">Seconds</span> till Christmas</h1>
        <h3>Send Christmas gift 🎁 🤲</h3>
        <h4>Opay 7060768548</h4>
        <Footer />
    </div>
    
  )
}

export default App
