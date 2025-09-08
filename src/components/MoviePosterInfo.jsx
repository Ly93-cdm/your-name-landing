import { motion } from "framer-motion";

function MoviePosterInfo({ posterSrc, alt, writer, cast, description, className }) {
    return (
        <motion.section 
            className={className}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={posterSrc} alt={alt} />
            <div>
                <p>Writer by {writer}</p>
                <p>Cast: {cast}</p>
                <p>{description}</p>
            </div>
        </motion.section>
    );
}

export default MoviePosterInfo;