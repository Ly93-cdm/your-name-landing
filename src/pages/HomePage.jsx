import React, { useState, useEffect,  useRef, useCallback } from 'react';
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai";
import { AnimatePresence, motion } from 'framer-motion';

import bgImage from '../assets/kimi-no-na-wa.png';
import bgPicture from '../assets/character.png';
import Carousel from '../components/Caroussel';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.png';

import { fadeUp, defaultTransition, withDelay } from '../utils/animations';
import './HomePage.css';

function HomePage() {
    const carouselImages = [
        { src: img1, alt: "Cena 1" },
        { src: img2, alt: "Cena 2" },
        { src: img3, alt: "Cena 3" },
        { src: img4, alt: "Cena 4" },
    ];

    const [activeTab, setActiveTab] = useState("summary");
    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    const pauseCarousel = () => clearInterval(intervalRef.current);

    const startCarousel = useCallback (() => {
        const track = trackRef.current;
        if (!track) return;

        const imgs = track.querySelectorAll('img');
        let index = 0;

        intervalRef.current = setInterval(() => {
        index = (index + 1) % imgs.length;
        const scrollX = imgs[index].offsetLeft;
        
        track.scrollTo({ left: scrollX, behavior: "smooth" });
        }, 3000); 
    }, []);
  
    useEffect(() => {
        startCarousel();
        return () => clearInterval(intervalRef.current);
    }, [startCarousel]);

    return (
    <main className='main'>
        {/* Personagens */}
        <section className='character'>
            <motion.img src={bgImage} alt="Taki and Mitsuha"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            />
            <motion.h3 className='name taki'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={withDelay(0.2)}
            >
            Taki Tachibana
            </motion.h3>
            <motion.h3 className='name mitsuha'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={withDelay(0.4)}
            >
            Mitsuha Miyamizu
            </motion.h3>
        </section>

        {/* Informações do filme */}
        <section className='movie-info'>
            <motion.div className='movie-background'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
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
                <button className='like' aria-label="Like"><AiOutlineLike size={24} /></button>
                <button className='dislike' aria-label="Dislike"><AiOutlineDislike size={24} /></button>
            </div>
            </motion.div>
        </section>

        {/* Resumo / Críticas / Frases */}
        <section className='movie-summary'>
            <motion.div className='summary-content'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
            >
            <img src={bgPicture} alt="movie poster" />
            <div className='text-block'>
                <AnimatePresence mode="wait">
                {activeTab === "summary" && (
                    <motion.p key="summary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                    Your Name. is a 2016 Japanese anime film,<br />
                    written and directed by Makoto Shinkai, and produced by CoMix Wave Films.<br />
                    The story follows two teenagers who inexplicably switch bodies,<br />
                    forming a deep connection as they try to understand this supernatural phenomenon.
                    </motion.p>
                )}
                {activeTab === "critics" && (
                    <motion.p key="critics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                    Critics praised the animation, emotional depth, and engaging storytelling...
                    </motion.p>
                )}
                {activeTab === "snippets" && (
                    <motion.ul key="snippets"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                        <li>“I'm always searching for something... someone.”</li>
                        <li>“We are connected by a thread of fate.”</li>
                        <li>“I just wanted to tell you... wherever you are, I'm looking for you.”</li>
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

        {/* Carrossel de imagens */}
        <Carousel images={carouselImages} title="Cenas" />
        

        {/* Moral da história */}
        <motion.footer className='moral-section'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
        >
            <h2>Mensagem Final</h2>
            <blockquote>
                <p>
                    Human memory is limited.<br />
                    But what’s engraved in the heart will never be erased by time.<br />
                    No matter how much time passes, how far apart they are, or how complex the story becomes<br />
                    sincerity always finds its way back.
                </p>
                <cite>— Himawari, 2022</cite>
            </blockquote>
        </motion.footer>
    </main>
  );
}

export default HomePage;
