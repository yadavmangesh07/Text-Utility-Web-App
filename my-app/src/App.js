import './App.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [btnText, setBtnText] = useState('Dark');
  const [isBold, setIsBold] = useState(false);

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText('dark');
      setBtnText('Dark');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
    } else {
      setMode('dark');
      setText('light');
      setBtnText('Light');
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    }
  };

  return (
    <>
      <NavBar title="TextUtils" about="About" mode1={mode} textColor={text} buttonText={btnText} toggleMode={changeMode} />
      <div className="container">
        <TextForm heading="Enter The Text To Be Analyzed" isBold={isBold} setIsBold={setIsBold} />
      </div>
    </>
  );
}

export default App;
