import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="header-inner">
        <div className="flex-wrap">
          <div className="left-wrap">
            <Link to="/">
              <div className="logo-img-grp">
                <img src={Logo} alt="logo-img" className='img' />
              </div>
            </Link>
            <nav className="header-nav">
              <ul className='header-nav-grp'>
                <li className='header-nav-list'>
                  <Link to="/">reactMovie()</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right-wrap">
            {/* 고도화 시 작업해 볼 예정..? */}
            {/* <div className="search-grp">
              <input type="text" onChange={(e) => {
                setKeyword(e.target.value);
                console.log(keyword);
              }} />
              <button type="button">검색</button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;