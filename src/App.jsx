import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='background'></div>
      <header className='header'>
        {/* Logo/ titulo */}
        <div className='logo'>
          <h1>Movie</h1>
          <h1>Review</h1>
        </div>
        {/* Navegacion */}
        <div className='navbar-wrap'>
          <nav className='navbar'>
            <ul>
              <a href='#'>Description</a>
              <a href='#'>Playlist</a>
              <a href='#'>Profile</a>
              <a href='#'>Next movie</a>
            </ul>
          </nav>
        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
