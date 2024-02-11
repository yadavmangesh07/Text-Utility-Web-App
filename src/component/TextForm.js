import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [previewedText, setPreviewedText] = useState('');
  const [previewClicked, setPreviewClicked] = useState(false);
  const[isbold,setbold]=useState(false);

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const makeBold=()=>{
    setbold(!isbold);
  }
  const copyToClipboard = () => {
    // Create a temporary input element
    const tempInput = document.createElement('textarea');
    tempInput.value = text;

    // Append the input element to the DOM
    document.body.appendChild(tempInput);

    // Select and copy the text inside the input
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);
  };


  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearTextField = () => {
    let temp = '';
    setText(temp);
    setPreviewedText(temp);
  };

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    
  };

  const countWordsAndCharacters = (inputText) => {
    const words = inputText.split(/\s+/);
    const characters = inputText.replace(/\s/g, '');

    return {
      wordCount: words.length,
      characterCount: characters.length,
    };
  };

  const preview = () => {
    setPreviewClicked(true);
    setPreviewedText(text);
  };

  
  const { wordCount, characterCount } = countWordsAndCharacters(text);

  return (
    <>
    <div className="parent ">
    <div className="container ">
        <div>
          <h1 className='my-3'>{props.heading}</h1>

          <div className="mb-3" my-3="true">
            <textarea style={{backgroundColor:props.mode1==='dark'?'#A2A8B4':'white',fontSize:'17px'}}
              className="form-control color-black"
              value={text}
              placeholder="Enter Your Text Here.."
              onChange={handleTextChange}
              id="mybox"
              rows="8"
            ></textarea>
          </div>

          <div className="primary-buttons">
            <button type="button" onClick={upperCase} className="btn btn-success">
              Convert To UpperCase
            </button>
            <button type="button" onClick={lowerCase} className="btn btn-success mx-2">
              Convert To LowerCase
            </button>
            <button type="button" onClick={preview} className="btn btn-success mx-1.5">
              Preview to read
            </button>
            <button type="button" onClick={clearTextField} className="btn btn-success mx-2">
              Clear Text Field
            </button>
            <button type="button" onClick={copyToClipboard} className="btn btn-success mx-1.5">
              Copy to Clipboard
            </button>
            <button type="button" onClick={makeBold} className="btn btn-success mx-2">
              Make Bold
            </button>
          </div>
        </div>
      </div>

      <div className="container my3">
        <h1 className='my-3'>Your Text Summary</h1>
        <p>
          {wordCount} words & {characterCount} characters (ignoring spaces)
        </p>
        <p>{0.008 * wordCount} minutes to read at average speed</p>
        <div style={{ fontWeight: isbold ? 'bold' : 'normal' }}>

        {previewClicked && <p>{previewedText}</p>}
        </div>
      </div>
</div>    
   </>
  );
}
