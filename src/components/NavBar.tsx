import style from '../styles/NavBar.module.css'

interface INavBarProps {
  homeLang: string;
  proyectsLang: string;
}

function NavBar({ homeLang, proyectsLang }: INavBarProps) {
  return (
    <div className={style.container}>
      <h1 className={style.name}>Tobias Nicolas Nuñez</h1>
      <ul className={style.navBar}>
        {/* <li className={style.navButton}>{homeLang}</li> */}
        <li className={style.navButton}>{proyectsLang}</li>
      </ul>
    {/* <hr className={style.hr} /> */}
    </div>
  );
}

export default NavBar;
