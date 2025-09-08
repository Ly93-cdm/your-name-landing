import React from "react";
import { motion } from 'framer-motion';
import TrackList from "../components/TrackList";
import PlaylistFooter from "../components/PlaylistFooter";
import { tracks } from '../utils/tracks';
import './Playlist.css';


const albumCover = "https://i.scdn.co/image/ab67616d0000b2733d1869d8c477d291a205a2d6";


function Playlist() {
    return (
        <div className="playlist-container">
          <h1>🎧 Trilha Sonora</h1>
          <p>As músicas que embalam cada cena inesquecível de "Your Name"</p>
          <TrackList tracks={tracks} />
          <PlaylistFooter />  
        </div>
    );
}

export default Playlist;