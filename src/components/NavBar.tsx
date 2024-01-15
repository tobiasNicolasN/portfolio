import style from "../styles/NavBar.module.css";
import { VscMenu, VscClose } from "react-icons/vsc";
import { useState } from "react";

function NavBar() {
  const [isSideBarVisible, setSideBarVisible] = useState(false);

  function showSideBar() {
    setSideBarVisible(!isSideBarVisible);
  }

  return (
    <nav className={style.container}>
      <ul className={style.navBar}>
        <li>
          <a className={style.name}>Tobias Nicolas Nuñez</a>
        </li>
        <li>
          <a href="#" className={`${style.item} ${style.hideOnMobile}`}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#" className={`${style.item} ${style.hideOnMobile}`}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className={`${style.item} ${style.hideOnMobile}`}>
            CONTACT
          </a>
        </li>
        <li onClick={showSideBar}>
          <a className={style.menuButton}>
            <VscMenu />
          </a>
        </li>
      </ul>
      <ul className={`${style.sideBar} ${isSideBarVisible ? style.show : ""}`}>
        <li onClick={showSideBar}>
          <a href="#" className={style.closeButton}>
            <VscClose />
          </a>
        </li>
        <li>
          <a href="#" className={style.sideBarItem}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#" className={style.sideBarItem}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className={style.sideBarItem}>
            CONTACT
          </a>
        </li>
      </ul>
      <hr />
    </nav>
  );
}

export default NavBar;
