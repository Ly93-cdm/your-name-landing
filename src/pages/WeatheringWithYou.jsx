import React from "react";
import MovieHeader from "../components/MovieHeader";
import MoviePosterInfo from "../components/MoviePosterInfo";
import MovieCarousel from "../components/MovieCaroussel";
import MovieQuote from "../components/MovieQuote";
// import MovieCharacters from "../components/MovieCharacters";
import "./WeatheringWithYou.css";
import posterWWY from '../assets/img/posterWWY.jpg';




function WeatheringWithYou() {

    const carouselImages = [...Array(9)].map((_, i) => `src/assets/img/scena${i + 1}.jpg`);
    // const characterImages = [
    //     "src/assets/img/hodaka.jpg",
    //     "src/assets/img/hina.jpg",
    //     "src/assets/img/nagi.jpg",
    //     "src/assets/img/mami.jpg"
    // ];
    return (
        <main className="wwy-container">
            <MovieHeader
                title="Weathering"
                subtitle="With You"
                info="2019 | Shoujo | 1h51min | Anime | Language: Japanese"
                className="wwy-header"
            />
            <MoviePosterInfo
                posterSrc={posterWWY}
                alt="Weathering With You Poster"
                writer="Makoto Shinkai"
                cast="Kotaro Daigo, Nano Mori"
                description="On a day of extreme rain, high school student Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who has the power to manipulate the weather."
                className="wwy-poster-info"
            />
            <MovieCarousel images={carouselImages} title="Scenas" className="wwy-carousel" />
            <MovieQuote quote="Who cares if we never see the sun shine again? I want you more than any blue sky. Time can go crazy." className="wwy-quote" />
            {/* <MovieCharacters images={characterImages} className="wwy-characters" /> */}
        </main>
    );
}

export default WeatheringWithYou;

