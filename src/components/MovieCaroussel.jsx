import { motion } from "framer-motion";

function MovieCaroussel({ images = [], title, className }) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>{title}</h2>
            <div className={`${className}-wrapper`}>
                <div className={`${className}-track`}>
                    {images.map((src, i) => (
                        <img key={i} src={src} alt={`scene ${i + 1}`} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default MovieCaroussel;