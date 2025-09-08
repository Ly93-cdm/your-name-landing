import { motion } from "framer-motion";
import creatorpng from "../assets/creator.png";
import { defaultTransition, withDelay } from "../utils/animations";

function CreatorHeader() {
    return (
        <section className='creator-character'>
            <motion.img
                src={creatorpng}
                alt='Makoto Shinkai'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition}
            />
            <motion.h3
                className='creator-name left'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={withDelay(0.2)}
            >
                Makoto Shinkai
            </motion.h3>
            <motion.h3
                className='creator-role right'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={withDelay(0.4)}
            >
                Director & Storyteller
            </motion.h3>
        </section>
    );
}

export default CreatorHeader;