import { Link, useLocation } from "react-router-dom";
import Logo from "assets/images/logo.png";
import { useEffect } from "react";
import Favorite from "./Favorite";

let currentPath;

const Header = () => {
  let location = useLocation();
  console.log("location", location);

  useEffect(() => {
    currentPath = "/";
  });

  function onReload() {
    // 홈에서 router 동일할 때 페이지 새로고침
    if (currentPath === location.pathname) {
      window.location.reload();
    }

    currentPath = location.pathname;
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="flex-wrap">
          <div className="left-wrap">
            <Link to="/" onClick={() => onReload()}>
              <div className="logo-img-grp">
                <img src={Logo} alt="logo-img" className="img" />
              </div>
            </Link>
            {/* <nav className="header-nav">
              <ul className='header-nav-grp'>
                <li className='header-nav-list'>
                  <Link to="/">reactMovie()</Link>
                </li>
              </ul>
            </nav> */}
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
          <Favorite />
        </div>
      </div>
    </header>
  );
};

export default Header;
