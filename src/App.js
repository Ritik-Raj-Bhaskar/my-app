
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="Project K" aboutText="About This Project" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className='container my-3'>
          {/* my-3 mean margin in y axix */}


          {/* <Routes>
            <Route exact path='/about' element={<About />} ></Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text " mode={mode} />}></Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text " mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
