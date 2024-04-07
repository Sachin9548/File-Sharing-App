import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { uploadFile } from './Services/api.js';

function App() {
  const fileinputref = useRef();
  const [file, setfile] = useState('');
  const [result,setresult]=useState('');

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        // console.log(data,"data");
        let responce = await uploadFile(data);
        // console.log(responce);
        setresult(responce);
      }
    };
    getImage();
  }, [file]);
  const onUploadClick = () => {
    fileinputref.current.click();
  };
  // console.log(file);
  const logo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhHhAe1lKwzRVaAGVuMPMFbVOC_9S8YNtrw&s';
  return (
    <>
      <div className="container">
        <img src={logo} alt="error" />

        <div className="right">
          <h1>File Sharing Application</h1>
          <p>Upload And Share the File With Your Friends </p>
          <button
            onClick={() => {
              onUploadClick();
            }}
          >
            Upload
          </button>

          <input
            type="file"
            ref={fileinputref}
            onChange={(e) => {
              // multiple file Selection
              setfile(e.target.files[0]);
            }}
            className="hidden"
          />
          <a className="link" href={result} target='_blank'>{result}</a>
        </div>

        
      </div>
    </>
  );
}

export default App;
