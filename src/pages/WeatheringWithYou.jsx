import React from "react";
import "./WeatheringWithYou.css";
import { motion } from "framer-motion";


function WeatheringWithYou() {
    return (
        <main className="wwy-container">
            <motion.section
                    className="wwy-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                <h1 className="wwy-title"> 
                    WEATHERING <span className="wwy-subtitle">WITH YOU</span>
                    <p className="wwy-info">2019 | Shoujo | 1h51min | Anime | Language: Japanese</p>
                </h1>
            </motion.section>

            <motion.section 
                className="wwy-poster-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <img src="src/assets/img/posterWWY.jpg" alt="Weathering With You Poster" className="wwy-poster"/>
                <div className="wwy-description">
                    <p>Write by Makoto Shinkai</p>
                    <p>Cast: Kotaro Daigo, Nano Mori</p>
                    <p>
                        On a day of extreme rain, high school student Hodaka Morishima runs <br />
                        away from his trouble rural home to Tokyo and befriends an orpahn <br />
                        girl who has the power to manipulate the weather.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="wwy-carousel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <h2 className='wwy-carousel-title'>Scenas</h2>
                <div className="wwl-carousel-wrapper">
                    <div className="wwl-carousel wwl-carousel-track">
                        {[...Array(9)].map((_, i) => (
                        <img
                            key={i}
                            src={`src/assets/img/scena${i + 1}.jpg`}
                            alt={`scene ${i + 1}`}
                        />
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="wwy-quote"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                <blockquote>
                    <p>
                        “Who cares if we never see the sun shine again? I want you more than
                        any blue sky. Time can go crazy.”
                    </p>
                </blockquote>
            </motion.section>
            
            <motion.section className="wwy-characters">
                <img src="src/assets/img/hodaka.jpg" alt="Hodaka" />
                <img src="src/assets/img/hina.jpg" alt="Hina" />
                <img src="src/assets/img/nagi.jpg" alt="Nagi" />
                <img src="src/assets/img/mami.jpg" alt="Mami" />
            </motion.section>
        </main>
    );
}

export default WeatheringWithYou;

