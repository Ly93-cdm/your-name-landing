import { motion } from "framer-motion";

function MovieCharcters({ images, className }) {
    return (
        <motion.section className={className}>
            {images.map((src, i) => (
                <img key={i} src={src} alt={`Character ${i + 1}`} />
            ))}
        </motion.section>
    );  
}

export default MovieCharcters;