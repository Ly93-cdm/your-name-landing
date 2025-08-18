import React, { useState, useEffect,  useRef  } from 'react';
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai";
import { FaBars, FaTimes } from 'react-icons/fa';
import bgImage  from './assets/kimi-no-na-wa.png';
import bgPicture from './assets/character.png';
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.png';
import './App.css'

function App() {
  // menu
  const [open, setOpen] = useState(false); 
  
  // carousel
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imgs = track.querySelectorAll("img");
    let index = 0;

    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
      index = (index + 1) % imgs.length;
      const scrollX = imgs[index].offsetLeft;

      track.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    }, 3000); 
    };

    startCarousel();

    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseCarousel = () => {
    clearInterval(intervalRef.current);
  };

  const resumeCarousel = () => {
    const track = trackRef.current;
    if(!track) return;

    const imgs = track.querySelectorAll("img")
    let index = 0;

    intervalRef.current = setInterval(() => {
      index = (index +1) % imgs.length;
      const scrollX = imgs[index].offsetLeft;

       track.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    }, 3000);
  };

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
    
        {/* navbar */}
        <div className='navbar-wrap'>
          <div className='hamburger' onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`navbar ${open ? 'open' : ''}`}>
            <ul>
              <li><a href='#'>Description</a></li>
              <li><a href='#'>Playlist</a></li>
              <li><a href='#'>Profile</a></li>
              <li><a href='#'>Next movie</a></li>
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
              <button className='like' aria-label="Like"><AiOutlineLike size={24}/></button>
              <button className='dislike' aria-label="Dislike"><AiOutlineDislike size={24} /></button>
            </div>
          </div>
        </section>

        {/* Seção de Resumo */}
        <section className='movie-summary'>
          <div className='summary-content'>
            <img src={bgPicture} alt="movie poster"/>

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

        {/* fotos carrossel */}
        <section className='movie-carousel'>
          <h2 className='carousel-title'>Scenas</h2>
          <div className='carousel-wrapper'>
            <div className='carousel' ref={trackRef} onMouseEnter={pauseCarousel}
  onMouseLeave={resumeCarousel}>
              <div className='carousel-track' >
                <img src={img1} alt="Scene 1" />
                <img src={img2} alt="Scene 2" />
                <img src={img3} alt="Scene 3" />
                <img src={img4} alt="Scene 4" />
              </div>
            </div> 
          </div>
        </section>
      </main>

      <footer className='moral-section'>
        <h2>Moral Story</h2>
        <blockquote>
          <p> The memory of humans is indeed limited.<br/>
          However, what is embedded in the heart will never be consumed by time.<br/> 
          No matter how long, no matter how far, and no matter how complicated the storyline.<br/> 
          Sincerity in the heart will always find a place to return.
          </p>
          <cite>— Himawari, 2022</cite>
        </blockquote>
      </footer>

    </div>
  );
}

export default App;
