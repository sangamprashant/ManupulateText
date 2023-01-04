import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './component/Footer';

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }
  
  const togleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode is Enabled", "success");
      document.title='ManupulateText - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode is Enabled", "success");
      document.title='ManupulateText - Light Mode';

    }
  }
  return (
    <>
      <Router>  
        <Navbar title="ManupulateText" about="About us" mode={mode} togleMode={togleMode}/>
        
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
                <Route path="/about">
                     <About mode={mode}/>
                </Route>
                <Route path="/">
                    <TextForm showalert={showalert} heading="ManupulateText - word counter, Character counter, Remove extra spaces" mode={mode}/>
                </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
