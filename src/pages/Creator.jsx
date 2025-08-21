import React from 'react';
import { motion } from 'framer-motion';
import creatorpng  from '../assets/creator.png';
import './Creator.css';


function Creator() {
    return (
      <main className="creator-page">
        <section className='creator-character'>
            <motion.img
                src={creatorpng}
                alt='Makoto Shinkau'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1.5, ease:  "easeInOut" }}
            />

            <motion.h3 
                className='creator-name left'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1.5, ease:  "easeInOut", delay: 0.2}}
            >
                Makoto Shinkai
            </motion.h3>

            <motion.h3
                className='creator-role right'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1.5, ease:  "easeInOut", delay: 0.2 }}    
            >
                Director & Storyteller
            </motion.h3>
        </section>

        <motion.section 
            className='creator-biography'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}    
        >
            <h3>Biography</h3>
            <p>
            Born in 1973 in Nagano, Japan, Makoto Shinkai began his career as a video game animator before releasing his breakout short film <em>Voices of a Distant Star</em> in 2002.
            His works are known for poetic storytelling, breathtaking visuals, and emotional depth.
            </p>
            <p>
            Shinkai’s films often explore themes of distance, longing, and fate. His trilogy — <em>Your Name</em>, <em>Weathering With You</em>, and <em>Suzume</em> — are among the highest-grossing Japanese films of all time.
            </p>
        </motion.section>

        <motion.section
            className='creator-inspiration'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}
        >
            <h3>Creative Inspiration</h3>
            <p>
            Shinkai has cited influences like <em>Dracula</em> and <em>Laputa: Castle in the Sky</em>, blending gothic longing with sky-filled wonder.
            His early work, <em>Voices of a Distant Star</em>, set the tone for his signature style: bittersweet distance, emotional resonance, and visual poetry.
            </p>
            <blockquote>
            <p>“Waiting for a message from someone you love, not knowing when or if it will come — that’s something that still hurts today.”</p>
            <cite>— Makoto Shinkai</cite>
            </blockquote>
        </motion.section>
    </main>  
    );
}

export default Creator;