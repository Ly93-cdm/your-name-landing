import React from "react";
import { motion } from "framer-motion";
import Suzume from './Suzume'

function WeatheringWithYou() {
    return (
        <main className="movie-page">
        <h2>Weathering With You</h2>
        <p>Descrição do filme...</p>
        <Link to="/suzume" className="next-button">Next movie</Link>
        </main>
    );
}

export default WeatheringWithYou;

