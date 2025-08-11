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

        {/* nova Section de informaçao */}
        <section className='movie-info'>
          <div className='details'>
            <p>2016 • Roman/Fantasy • 1h 52min</p>
            <p>96% das pessoas gostaram</p>
          </div>
          <div className='title'>
            <h2>君の名は。</h2>
            <h3>Kimi no Na wa</h3>
            <p>Your Name</p>
          </div>
          <div className='actions'>
            <button className='like'>👍</button>
            <button className='dislike'>👎</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
