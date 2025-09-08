import { motion } from "framer-motion";
import { defaultTransition } from "../utils/animations"; 


function TrackItem({ track}) {
    return (
        <motion.li
            className="track-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
        >
            <div className="vinyl-wrapper">
                <img src={track.cover} alt={`${track.title} cover`} className="vinyl" />
            </div>
            <div className="track-info">
                <h3>{track.title}</h3>
                <p>{track.artist}</p>
                <a href={track.link} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
            </div>
        </motion.li>
    );
}

export default TrackItem;