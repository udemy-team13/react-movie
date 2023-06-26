import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-inner">
        <nav className="header-nav">
          <ul className='header-nav-grp'>
            <li className='header-nav-list'>
              <Link to="/">MovieList</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;