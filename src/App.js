import React, {useState} from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [mode,setMode] = useState('light');
    const [alert,setAlert] = useState('');

    const showAlert = (message,type) =>{
        setAlert({
            Type : type,
            Message : message,
        })
        setTimeout(() =>{
            setAlert('');
        },1500);
    };

    const removeBodyClasses = ()=>{
        document.body.classList.remove('bg-light');
        document.body.classList.remove('bg-secondary');
        document.body.classList.remove('bg-danger');
        document.body.classList.remove('bg-success');
        document.body.classList.remove('bg-primary');
        document.body.classList.remove('bg-warning');
    }

    const toggleMode = (cls) =>{
        removeBodyClasses();
        document.body.classList.add('bg-' + cls);
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            // showAlert('Dark Mode is enabled','success');
            // document.title = 'Dark Mode'
            // setInterval(() =>{
            //     document.title = 'Dark Mode'
            // },2000);
            // setInterval(() =>{
            //     document.title = 'Light Mode'
            // },1500);
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            // showAlert('Light Mode is enabled','success');
        }
    };

  return (
    <>
        <Router>
            <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} key={new Date()} />
            <Alert alert={alert}/>
            <div className="container my-3">
                <Switch>
                    <Route exact  path="/">
                        <div className='container'>
                            <Textform showAlert={showAlert}  heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
                        </div>
                    </Route>
                    <Route exact path="/about">
                        <About mode={mode} />
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
    
   
  );
}

export default App