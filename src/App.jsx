import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div 
      className="app-container"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-150674868)',
      }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">Your Name (Kimi no Na wa)</h1>
        <p className="subtitle">2016 • Romance/Fantasia • 1h 52min</p>
        <p className="description">
          96% dos usuários do Google gostaram desse filme
        </p>

        <div className="button-group">
          <button className="btn pink">Riskasan</button>
          <button className="btn blue">Review</button>
          <button className="btn green">Snippets and clips</button>
        </div>

        <div className="moral-box">
          <h2 className="moral-title">Moral Story</h2>
          <p>
            Human memory is truly limited. However, what is recorded in the heart will never be consumed by time.
            No matter how long it lasts, how far the distance is, and how complicated the journey may be.
            The heart will always remember the person who has touched it.
          </p>
          <p className="signature">Riskasan</p>
        </div>
      </div>
    </div>
  );
}

export default App;
