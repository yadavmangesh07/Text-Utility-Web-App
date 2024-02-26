import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [previewedText, setPreviewedText] = useState('');
  const [previewClicked, setPreviewClicked] = useState(false);
  const [isbold, setbold] = useState(false);
  

  const upperCase = () => {
    if (text === '') {
      props.showAlert('Empty Text Field', 'warning');



    }
    else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converted To Upper Case', 'success');

    }



  };
  const makeBold = () => {
    if (text === '') {
      props.showAlert('Empty Text Field', 'warning');



    }
    else {

      setbold(!isbold);
      if (!isbold) {

        props.showAlert('Converted To Bold', 'success');
      }
      else {
        props.showAlert('Converted To Lighter', 'success');


      }
    }

  }
  const copyToClipboard = () => {
    if (text === '') {
      props.showAlert('Empty Text Field', 'warning');



    }
    else {

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
      props.showAlert('Text Copied To ClipBoard', 'success');
    }

  };


  const lowerCase = () => {
    if (text === '') {
      props.showAlert('Empty Text Field', 'warning');



    }
    else {

      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted To Lower Case', 'success');
    }


  };

  const clearTextField = () => {
    if (text !== '') {
      let temp = '';
      setText(temp);
      setPreviewedText(temp);
      props.showAlert('Text Field Cleared', 'success');



    }

  };

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

  };

  const countWordsAndCharacters = (inputText) => {
    // Check if inputText is empty
    if (!inputText.trim()) {
      return {
        wordCount: 0,
        characterCount: 0
      };
    }

    const words = inputText.split(/\s+/);
    const characters = inputText.replace(/\s/g, '');

    return {
      wordCount: words.length,
      characterCount: characters.length,
    };
  };


  const preview = () => {
    if (text === '') {
      props.showAlert('Enter Text To Preview', 'warning');



    }
    else {

      setPreviewClicked(true);
      setPreviewedText(text);
    }

  }
  const removeExtraSpaces = () => {
    if (text === '') {
      props.showAlert('Emty Text Field', 'warning');



    }
    else {
      let newText = text.replace(/\s+/g, ' ').trim();

      setText(newText);

    }

  }
  



  const { wordCount, characterCount } = countWordsAndCharacters(text);

  return (
    <>
      <div className="parent ">
        <div className="container ">
          <div>
            <h1 className='my-3'>{props.heading}</h1>

            <div className="mb-3" my-3="true">
              <textarea style={{ backgroundColor: props.mode1 === 'dark' ? '#D1E6DD' : 'white' }}
                className="form-control color-black"
                value={text}
                placeholder="Enter Your Text Here.."
                onChange={handleTextChange}
                id="mybox"
                rows="8"
              ></textarea>
            </div>

            <div className="primary-buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={upperCase} className="btn btn-success">
                Convert To UpperCase
              </button>
              <button type="button" onClick={lowerCase} className="btn btn-success">
                Convert To LowerCase
              </button>
              <button type="button" onClick={preview} className="btn btn-success ">
                Preview to read
              </button>
              <button type="button" onClick={clearTextField} className="btn btn-success">
                Clear Text Field
              </button>
              <button type="button" onClick={copyToClipboard} className="btn btn-success ">
                Copy to Clipboard
              </button>
              <button type="button" onClick={makeBold} className="btn btn-success">
                Make Bold
              </button>
              <button type="button" onClick={removeExtraSpaces} className="btn btn-success">
                Remove Extra Spaces
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
          <div style={{ fontWeight: isbold ? 'bold' : 'lighter' }}>


            {previewClicked && <p>{previewedText}</p>}

          </div>
        </div>
      </div>
    </>
  );
}
