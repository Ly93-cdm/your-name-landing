import { motion } from 'framer-motion';
import { defaultTransition } from '../utils/motionConfig';

function CreatorBiography() {
     return (
        <motion.section
        className='creator-biography'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={defaultTransition}
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
    );
}

export default CreatorBiography;
