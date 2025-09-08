import { motion } from "framer-motion";

function MovieQuotes({ quote, className }) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.5 }}
        >
            <h2>Quotes</h2>
            <blockquote>
                <p>{quote}</p>
            </blockquote>
        </motion.section>
    );
}

export default MovieQuotes;
