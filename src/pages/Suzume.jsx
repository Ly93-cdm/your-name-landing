import React from "react";
import MovieHeader from "../components/MovieHeader";
import MoviePosterInfo from "../components/MoviePosterInfo";
import MovieCarousel from "../components/MovieCaroussel";
import MovieQuote from "../components/MovieQuote";
import "./MoviePage.css";


function Suzume() {
   const carouselImages = [...Array(9)].map((_, i) => `src/assets/img/frame${i + 1}.jpg`);

   return (
        <main className="movie-page">
        <MovieHeader
            title="Suzume"
            info="2022 | Shoujo | 2h02min | Anime | Language: Japanese"
            className="movie-header"
        />
        <MoviePosterInfo
            posterSrc="src/assets/img/posterS.jpg"
            alt="Suzume Poster"
            writer="Makoto Shinkai"
            cast="Nanoka Hara, Hokuto Matsumura"
            description="A 17-year-old girl named Suzume discovers a mysterious door in the mountains, and soon others begin to appear throughout Japan. When opened, they bring disaster and destruction, and only Suzume can close them again."
            className="movie-poster-info"
        />
        <MovieCarousel images={carouselImages} title="Scenas" className="movie-carousel" />
        <MovieQuote quote="The future is not that scary. The night might seem endless now. But, morning will come." className="movie-quote" />
        </main>
   );
}

export default Suzume;

