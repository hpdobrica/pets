import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Penta Pets
        </p>
      </header>
      <div className="App-uploader">
        <p>Working from home? Send us a picture of your pets!</p>
        <label className="upload-btn">
          Upload
          <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
        </label>

      </div>
      <div className="App-gallery">
        <div className="App-image-container">
          <img src="img/a.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/b.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/c.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/d.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/e.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/f.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/g.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/h.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/i.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/j.jpg" className="App-image"></img>
        </div>
        <div className="App-image-container">
          <img src="img/k.jpg" className="App-image"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
