import React from 'react';
import logo from './logo.svg';
import './App.css';


function App(props) {
  const { spin, onIconClick, btnText, speedUpAnim, slowDownAnim, animationSpeed }
  =props;
  console.log(animationSpeed)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ animation:`App-logo-spin infinite ${animationSpeed}s linear`}} className={`App-logo ${spin ? '' : 'Spin-paused'}`} alt="logo" />
        <div style={{display: 'inline'}}>
          <button className='App-button' onClick={() => slowDownAnim(animationSpeed)}>
            {'<<'}
        </button>
          <button className='App-button' onClick={() => onIconClick(!spin)}>
            {btnText}
        </button>
          <button className='App-button' onClick={() => speedUpAnim(animationSpeed)}>
           {'>>'}
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
