import { useLocation, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation({ open, setOpen }) {
    const location = useLocation();
    

    let nextMovieLink = "/weathering-with-you";
    if (location.pathname === "/weathering-with-you") nextMovieLink = "/suzume";
    if (location.pathname === "/suzume") nextMovieLink = "/";

    return (
      <header className='header'>
        <div className='logo'>
          <h1>Movie</h1>
          <h1>Review</h1>
        </div>

        <div className='navbar-wrap'>
          <div className='hamburger' onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`navbar ${open ? 'open' : ''}`}>
            <ul>
              <li><Link to="/">Description</Link></li>
              <li><Link to="/playlist">Playlist</Link></li>
              <li><Link to="/creator">About the Creator</Link></li>
              <li><Link to={nextMovieLink}>Next movie</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Navigation;
