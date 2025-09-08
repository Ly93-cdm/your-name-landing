import { motion } from "framer-motion";

function MovieHeader({ title, subtitle, info, className }) {
    return (
        <motion.section 
            className={className}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>
                {title} {subtitle && <span>{subtitle}</span>}
                <p>{info}</p>
            </h1>
        </motion.section>
    );
}

export default MovieHeader;