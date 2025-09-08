import React from 'react';
import CreatorHeader from '../components/CreatorHeader';
import CreatorBiography from '../components/CreatorBiography';
import CreatorInspiration from '../components/CreatorInspiration';
import './Creator.css';


function Creator() {
    return (
      <main className="creator-page">
        <CreatorHeader />
        <CreatorBiography />
        <CreatorInspiration />
    </main>  
    );
}

export default Creator;