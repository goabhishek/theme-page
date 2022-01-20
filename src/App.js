import { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';

function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }
  const [dark, setMode] = useState(false);

  useLayoutEffect(() => {
    if (localStorage.getItem("mode")) {
      setMode(JSON.parse(localStorage.getItem("mode")))
    }

  }, [])


  console.log({ dark })


  useEffect(() => {

    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={`${dark ? "dark-theme" : "light-theme"}-App`}>
      <div className="nav">
        <label className="switch">
          <input type="checkbox" checked={dark} onChange={() => setMode(dark => !dark)} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className='content'>
        <h1>{dark ? "Dark mode is on" : "Light Mode is On"}</h1>

      </div>
    </div>
  );
}

export default App;
