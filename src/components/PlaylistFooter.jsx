import { motion } from "framer-motion";
import { defaultTransition } from "../utils/animations";


function PlaylistFooter() {
    return (
        <motion.section
            className="playlist-footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
        >
            <p>🎵 Playlist project by Ly. Album cover sourced directly from Spotify CDN.</p>
            <p>
                Design inspiration from <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a> and <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS-Tricks</a>.
            </p>
        </motion.section>  
    );
}

export default PlaylistFooter;