import React from "react";
import './Playlist.css';

const tracks = [
    // adicionar as musicas
  {
    title: "Zenzenzense",
    artist: "RADWIMPS",
    link: "https://open.spotify.com/track/xyz",
    cover: "https://i.scdn.co/image/ab67616d0000b273e3e5f3e5a6e5f3e5e3e5f3e5"
  },
  {
    title: "Sparkle",
    artist: "RADWIMPS",
    link: "https://open.spotify.com/track/abc",
    cover: "https://i.scdn.co/image/ab67616d0000b273abcabcabcabcabcabcabcabc"
  }
];

function Playlist() {
    return (
        <div className="playlist-container">
            <h1>🎧 Trilha Sonora</h1>
            <p>As músicas que embalam cada cena inesquecível de "Your Name"</p>

            <ul className="track-list">
                {tracks.map((track, index) => (
                <li key={index} className="track-item">
                    <img src={track.cover} alt={`${track.title} cover`} />
                    <div className="track-info">
                    <h3>{track.title}</h3>
                    <p>{track.artist}</p>
                    <a href={track.link} target="_blank" rel="noopener noreferrer">Ouvir no Spotify</a>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;