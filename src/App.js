import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from './Components/About';
import { useState } from 'react';

function App() {

  const [mode, setmode] = useState("light");

  const togglemode = () =>{
    if (mode === "light"){
    setmode("dark");
    document.body.style.backgroundColor = 'grey';
  }
  else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  
  
  return (
    <>
<Navbar title = "Text Utils" aboutTitle = "About Us" mode = {mode} togglebtn = {togglemode}/>
<TextForm mode = {mode}/>
<About/>
</>
  );
}

export default App;
