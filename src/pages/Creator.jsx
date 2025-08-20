import React from 'react';
import { motion } from 'framer-motion';
import './Creator.css';


function Creator() {
    return (
      <main className="profile-page">
        <motion.section
            className="creator-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <h1>Profile</h1>
            <h2>Makoto Shinkai</h2>
            <p>Visionary filmmaker behind *Your Name*, *Weathering With You*, and *Suzume*</p>
        </motion.section>

        <motion.section
            className="creator-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <h3>Biography</h3>
            <p>
            Born in 1973 in Nagano, Japan, Makoto Shinkai began his career as a video game animator before releasing his breakout short film <em>Voices of a Distant Star</em> in 2002.
            His works are known for poetic storytelling, breathtaking visuals, and emotional depth.
            </p>
            <p>
            Shinkai’s films often explore themes of distance, longing, and fate. His trilogy — *Your Name*, *Weathering With You*, and *Suzume* — are among the highest-grossing Japanese films of all time.
            </p>
        </motion.section>

        <motion.section
            className="creator-inspiration"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
        <h3>Creative Inspiration</h3>
        <p>
          Shinkai has cited influences like *Dracula* and *Laputa: Castle in the Sky*, blending gothic longing with sky-filled wonder.
          His early work, *Voices of a Distant Star*, set the tone for his signature style: bittersweet distance, emotional resonance, and visual poetry.
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