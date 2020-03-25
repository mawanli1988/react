import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlipAlbum from './org/ray/album/components/flip-album/FlipAlbum';

function App() {
  return (
    <div className="App">
      
      <p>React 翻动相册</p>

      <div>
        <FlipAlbum/>
      </div>

    </div>
  );
}

export default App;
