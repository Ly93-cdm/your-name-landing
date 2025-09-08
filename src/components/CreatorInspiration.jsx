import { motion } from 'framer-motion';
import { defaultTransition } from '../utils/motionConfig';

function CreatorInspiration() {
    return (
        <motion.section
            className='creator-inspiration'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
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
    );
}

export default CreatorInspiration;
