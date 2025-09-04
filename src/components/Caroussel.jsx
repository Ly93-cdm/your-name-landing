import React, {useRef, useEffect, useCallback} from "react";
import { motion } from "framer-motion";
import './Caroussel.css';


const defaultTransition = { duration: 1.5, ease: "easeInOut" };

function Carousel({ images = [], title = "Carrossel de Imagens" }) {
    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    const pauseCarousel = () => clearInterval(intervalRef.current);

    const startCarousel = useCallback(() => {
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
        <section className='movie-carousel'>
        <h2 className='carousel-title'>{title}</h2>
        <motion.div
            className='carousel-wrapper'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
        >
            <div
            className='carousel'
            ref={trackRef}
            onMouseEnter={pauseCarousel}
            onMouseLeave={startCarousel}
            >
            <div className='carousel-track'>
                {images.map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt || `Imagem ${idx + 1}`} />
                ))}
            </div>
            </div>
        </motion.div>
        </section>
    );
}

export default Carousel;