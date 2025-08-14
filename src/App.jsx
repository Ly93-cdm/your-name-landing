import React from 'react'
import bgImage  from './assets/kimi-no-na-wa.png';
import bgPicture from './assets/character.png';
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.png';
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

        {/* Seção de informaçao */}
        <section className='movie-info'>
          <div className='movie-background'>
              <div className='details'>
              <p>2016 • Roman/Fantasy • 1h 52min</p>
              <p>96% of people liked it</p>
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
          </div>
        </section>

        {/* Seção de Resumo */}
        <section className='movie-summary'>
          <div className='summary-content'>
            <img src={bgPicture} alt="movie poster" srcset="" />

            <div className='text-block'>
              <p>Your Name. is a Japanese anime film released in 2016, <br/>
                written and directed by Makoto Shinkai, produced by CoMix Wave Films. <br/>
                The story revolves around two teenagers who inexplicably swap bodies, <br/>
                creating a deep connection as they try to understand this supernatural phenomenon.</p>
            </div>
            <nav className='summary-nav'>
              <ul>
                <li><a href="">Summary</a></li>
                <li><a href="">Critics</a></li>
                <li><a href="">Snippets</a></li>
              </ul>
            </nav>
          </div>
        </section>
        <section className='movie-carousel'>
          <h2 className='carousel-title'>Scenas</h2>
          <div className='carousel'>
            <div className='carousel-track'>
              <img src={img1} alt="Scene 1" />
              <img src={img2} alt="Scene 2" />
              <img src={img3} alt="Scene 3" />
              <img src={img4} alt="Scene 4" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
