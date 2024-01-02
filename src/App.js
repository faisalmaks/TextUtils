import './App.css';
import Navbar from './utilities/Navbar.js';
import TextForm from './utilities/TextForm.js';
import React, {useState} from 'react'
import Alert from './utilities/Alert.js';
import Aboutus from './utilities/Aboutus.js';
import Products from './utilities/Products.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btn, setBtn] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      Message:message,
      Type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleModeDG = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#001a00';
      showAlert('Dark Green mode has been enabled', 'success');
      setBtn('success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f2f2f2';
      showAlert('Light mode has been enabled', 'success');
      setBtn('secondary');
    }
  }
  const toggleModeB = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a0d00';
      showAlert('Brown mode has been enabled', 'success');
      setBtn('dark');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f2f2f2';
      showAlert('Light mode has been enabled', 'success');
      setBtn('secondary');
    }
  }  
  const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#00264d';
        showAlert('Dark mode has been enabled', 'success');
        setBtn('primary');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = '#f2f2f2';
        showAlert('Light mode has been enabled', 'success');
        setBtn('secondary');
      }
    }
    
  return (   
    <><Router>
      <Navbar title="Textutils" Hometext="Home" Products="Products" Services="Services" Service1="Solar plant" Service2="Bio Digester" Service3="Algae plants" About= "About Us" mode={mode} toggleModeDG={toggleModeDG} toggleModeB={toggleModeB} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write your text here" btn={btn}  button1='Convert to upper case' button2='Convert to lower case' mode={mode} button3='Clear Text' button4='remove extra spaces' button5='font style' button6='font weight'/>} />
            <Route exact path="/aboutus" element={<Aboutus mode={mode}/>} />
            <Route exact path="/products" element={<Products/>} />
      </Routes>
    </div>
      </Router>
    </>
  );
}

export default App;
