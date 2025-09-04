import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Playlist from './pages/Playlist';
import Creator from './pages/Creator';
import WeatheringWithYou from './pages/WeatheringWithYou';
import Suzume from './pages/Suzume';
import HomePage from './pages/HomePage';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout open={open} setOpen={setOpen}><HomePage /></Layout>} />
        <Route path="/playlist" element={<Layout open={open} setOpen={setOpen}><Playlist /></Layout>} />
        <Route path="/creator" element={<Layout open={open} setOpen={setOpen}><Creator /></Layout>} />
        <Route path="/weathering-with-you" element={<Layout open={open} setOpen={setOpen}><WeatheringWithYou /></Layout>} />
        <Route path="/suzume" element={<Layout open={open} setOpen={setOpen}><Suzume /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
