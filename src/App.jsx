import React, { useState, useEffect,  useRef  } from 'react';
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Navigation from './components/Navigation';
import Playlist from './pages/Playlist';
import Creator from './pages/Creator';
import WeatheringWithYou from './pages/WeatheringWithYou';
import Suzume from './pages/Suzume';
import bgImage  from './assets/kimi-no-na-wa.png';
import bgPicture from './assets/character.png';
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.png';
import './App.css'

function App() {

  // summary-nav content
  const [activeTab, setActiveTab] = useState("summary");

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

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" }
  };

  return (
    <Router>
      <div className='App'>
        {/* background */}
        <div className='background'></div>

        <Navigation open={open} setOpen={setOpen}/>

        {/* Rotas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
          {/* conteudo principal */}
          <main className='main'>
            <section className='character'>
              <motion.img
                src={bgImage}
                alt="Taki and Mitsuha"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.h3
                className='name taki'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              >
                Taki Tachibana
              </motion.h3>
              <motion.h3
                className='name mitsuha'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              >
                Mitsuha Miyamizu
              </motion.h3>
            </section>

            {/* Seção de informaçao */}
            <section className='movie-info'>
              <motion.div
                className='movie-background'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
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
              </motion.div>
            </section>

            {/* Seção de Resumo */}
            <section className='movie-summary'>
              <motion.div
                className='summary-content'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img src={bgPicture} alt="movie poster"/>

                <div className='text-block'>
                <AnimatePresence mode="wait">
                    {activeTab === "summary" && (
                      <motion.p
                        key="summary"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        Your Name. is a Japanese anime film released in 2016,<br/>
                        written and directed by Makoto Shinkai, produced by CoMix Wave Films.<br/>
                        The story revolves around two teenagers who inexplicably swap bodies,<br/>
                        creating a deep connection as they try to understand this supernatural phenomenon.
                      </motion.p>
                    )}
                    {activeTab === "critics" && (
                      <motion.p
                        key="critics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        Critics praised the film's animation, emotional depth, and storytelling...
                      </motion.p>
                    )}
                    {activeTab === "snippets" && (
                      <motion.ul
                        key="snippets"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        <li>“I’m always searching for something, someone.”</li>
                        <li>“We’re connected by a thread of fate.”</li>
                        <li>“I just wanted to tell you… wherever you are, I’m looking for you.”</li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <nav className='summary-nav'>
                  <ul>
                    <li><button onClick={() => setActiveTab("summary")}>Summary</button></li>
                    <li><button onClick={() => setActiveTab("critics")}>Critics</button></li>
                    <li><button onClick={() => setActiveTab("snippets")}>Snippets</button></li>
                  </ul>
                </nav>
              </motion.div>
            </section>

            {/* fotos carrossel */}
            <section className='movie-carousel'>
              <h2 className='carousel-title'>Scenas</h2>
              <motion.div
                className='carousel-wrapper'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className='carousel' ref={trackRef} onMouseEnter={pauseCarousel}
      onMouseLeave={resumeCarousel}>
                  <div className='carousel-track' >
                    <img src={img1} alt="Scene 1" />
                    <img src={img2} alt="Scene 2" />
                    <img src={img3} alt="Scene 3" />
                    <img src={img4} alt="Scene 4" />
                  </div>
                </div> 
              </motion.div>
            </section>
          </main>

          <motion.footer
            className='moral-section'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <h2>Moral Story</h2>
            <blockquote>
              <p> The memory of humans is indeed limited.<br/>
              However, what is embedded in the heart will never be consumed by time.<br/> 
              No matter how long, no matter how far, and no matter how complicated the storyline.<br/> 
              Sincerity in the heart will always find a place to return.
              </p>
              <cite>— Himawari, 2022</cite>
            </blockquote>
          </motion.footer>
          </>
          }
        />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/weathering-with-you" element={<WeatheringWithYou />} />
          <Route path='/suzume' element={<Suzume/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
