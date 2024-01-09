import style from '../styles/NavBar.module.css'

interface INavBarProps {
  homeLang: string;
  projectsLang: string;
}

function NavBar({ homeLang, projectsLang }: INavBarProps) {
  return (
    <div className={style.container}>
      <ul className={style.navBar}>
        <li className={style.navButton}>{homeLang}</li>
        <li className={style.navButton}>{projectsLang}</li>
      </ul>
    </div>
  );
}

export default NavBar;
