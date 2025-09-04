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



import {fadeUp} from '../utils/animations';
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


    const defaultTransition = { duration: 1.5, ease: "easeInOut" };
    const withDelay = (delay) => ({ ...defaultTransition, delay });


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
                    Your Name. é um filme de anime japonês de 2016,<br />
                    escrito e dirigido por Makoto Shinkai, produzido pela CoMix Wave Films.<br />
                    A história gira em torno de dois adolescentes que inexplicavelmente trocam de corpo,<br />
                    criando uma conexão profunda enquanto tentam entender esse fenômeno sobrenatural.
                    </motion.p>
                )}
                {activeTab === "critics" && (
                    <motion.p key="critics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                    Críticos elogiaram a animação, profundidade emocional e narrativa envolvente...
                    </motion.p>
                )}
                {activeTab === "snippets" && (
                    <motion.ul key="snippets"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                    <li>“Estou sempre procurando por algo, alguém.”</li>
                    <li>“Estamos conectados por um fio do destino.”</li>
                    <li>“Só queria te dizer... onde quer que você esteja, estou procurando por você.”</li>
                    </motion.ul>
                )}
                </AnimatePresence>
            </div>
            <nav className='summary-nav'>
                <ul>
                <li><button onClick={() => setActiveTab("summary")}>Resumo</button></li>
                <li><button onClick={() => setActiveTab("critics")}>Críticas</button></li>
                <li><button onClick={() => setActiveTab("snippets")}>Frases</button></li>
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
                    A memória humana é limitada.<br />
                    Mas o que está gravado no coração nunca será apagado pelo tempo.<br />
                    Não importa quanto tempo passe, quão longe estejam ou quão complexa seja a história.<br />
                    A sinceridade sempre encontra um caminho de volta.
                </p>
                <cite>— Himawari, 2022</cite>
            </blockquote>
        </motion.footer>
    </main>
  );
}

export default HomePage;
