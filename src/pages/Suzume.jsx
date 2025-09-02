import React from "react";
import "./Suzume.css";
import { motion } from "framer-motion";

function Suzume() {
    return (
        <main className="suzume-page">
            <motion.section
                className="s-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                >
                <h1 className="s-title"> 
                    Suzume
                    <p className="s-info">2022 | Shoujo | 2h02min | Anime | Language: Japanese</p>
                </h1>
            </motion.section>

            <motion.section 
                className="s-poster-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <img src="src/assets/img/posterS.jpg" alt="Suzume" className="s-poster"/>
                <div className="s-description">
                    <p>Write by Makoto Shinkai</p>
                    <p>Cast: Nanoka Hara, Hokuto Matsumura</p>
                    <p>
                        A 17-year-old girl named Suzume discovers a mysterious door in the mountains, and <br />
                        soon others begin to appear throughout Japan. When opened, they bring disaster <br />
                        and destruction, and only Suzume can close them again.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="s-carousel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <h2 className='s-carousel-title'>Scenas</h2>
                <div className="s-carousel-wrapper">
                    <div className=" s-carousel-track">
                        {[...Array(9)].map((_, i) => (
                        <img
                            key={i}
                            src={`src/assets/img/frame${i + 1}.jpg`}
                            alt={`scene ${i + 1}`}
                        />
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="s-quote"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                <blockquote>
                    <p>
                        “The future is not that scary. The night might seem endless now. But, morning will come.”
                    </p>
                </blockquote>
            </motion.section>


        </main>
    );
}

export default Suzume;

