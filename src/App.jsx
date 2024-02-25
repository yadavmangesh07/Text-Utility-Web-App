import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './components/About'; 

// function Home() {
//   return <TextForm heading="Enter The Text To Be Analyzed" />;
// }


function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [btnText, setBtnText] = useState('Dark');
  const [isBold, setIsBold] = useState(false);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);

    }, 1600);
  }


  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText('dark');
      setBtnText('Dark');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert('Light Mode Enabled', 'success');
    } else {
      setMode('dark');
      setText('light');
      setBtnText('Light');
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert('Dark Mode Enabled', 'success');
    }
  };

  return (
    <>
     
       <BrowserRouter>
      <NavBar title="TextiFy" about="About" mode1={mode} textColor={text} buttonText={btnText} toggleMode={changeMode} />
      <Alert alert={alert} />
      <main>

      <Routes>
      <Route path="/" element={<TextForm />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </main>
      
       </BrowserRouter>
    </>
  );
}

export default App;

