import React from 'react'
import bgImage  from './assets/kimi-no-na-wa.png';
import bgPicture from './assets/character.png';
import './App.css'

function App() {
   const carouselImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
      credit: "© 2016 CoMix Wave Films / Toho Co., Ltd."
    },
    {
      url: "https://m.media-amazon.com/images/I/81ZcD1UpDHL._AC_UF1000,1000_QL80_.jpg",
      credit: "© 2016 CoMix Wave Films / Toho Co., Ltd."
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
      credit: "© 2016 CoMix Wave Films / Toho Co., Ltd."
    }
  ];
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
        <section className='film-summary'>
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
        <section className='film-carousel'>
          <h2 className='carousel-title'>Scenas</h2>
          <div className='carousel'>
            <div className='carousel-track'>
               {carouselImages.map((img, index) => (
              <div key={index} className="carousel-item">
                <img src={img.url} alt={`Scene ${index + 1}`} />
                <p className="credit">{img.credit}</p>
              </div>
            ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
