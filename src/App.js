import './App.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [btnText, setBtnText] = useState('Dark');
  const [isBold, setIsBold] = useState(false);
  const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    typ:type
  });
  setTimeout(() => {
    setAlert(null);
    
  }, 1000);
}
  

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText('dark');
      setBtnText('Dark');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert('Light Mode Enabled','success');
    } else {
      setMode('dark');
      setText('light');
      setBtnText('Light');
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert('Dark Mode Enabled','success');
    }
  };

  return (
    <>
      <NavBar title="Textify" about="About" mode1={mode} textColor={text} buttonText={btnText} toggleMode={changeMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter The Text To Be Analyzed" isBold={isBold} setIsBold={setIsBold} mode1={mode}/>
      </div>
    </>
  );
}

export default App;