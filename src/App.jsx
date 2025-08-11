import React from 'react'
import bgImage  from './assets/kimi-no-na-wa.png';
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* background */}
      <div className='background'></div>

      {/* Header fixo */}
      <header className='header'>
        {/* Logo/ titulo */}
        <div className='logo'>
          <h1>Movie</h1>
          <h1>Review</h1>
        </div>
    
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

      {/* conteudo principal */}
      <main className='main'>
        <section className='character'>
          <img src={bgImage} alt="Taki and Mitsuha" />
          <h3 className='name taki'>Taki Tachibana</h3>
          <h3 className='name mitsuha'>Mitsuha Miyamizu</h3> 
        </section>
      </main>
    </div>
  );
}

export default App;
