import NavBar from "../components/NavBar";
// import About from "../components/About";
// import Skills from "../components/Skills";
import style from "../styles/Portfolio.module.css";

interface IPorfolio {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

function Español({ language, changeLanguage }: IPorfolio) {
  return (
    <>
      {language === "es" ? (
        <>
          <NavBar language={language} />
          <div className={style.aboutContainer}>
            <p className={style.about}>
              Soy un{" "}
              <span className={style.colorText}>Desarrollador FullStack</span>{" "}
              de veintitrés años. Me esfuerzo por crear soluciones tecnológicas
              que mejoren la vida de las personas. <br />
              <br /> Empezar a desarrollar cambió mi perspectiva, impulsándome a
              maximizar cada proyecto con un enfoque constante en la calidad. Me
              apasiona aprender nuevas tecnologías y explorar soluciones
              creativas. <br />
              <br /> Busco colaborar en equipos dinámicos donde pueda
              enriquecerme y contribuir de manera significativa. <br />
              <br /> Actualmente, resido en{" "}
              <span className={style.colorText}>Buenos Aires, Argentina.</span>
            </p>
          </div>
          <hr />
          <div className={style.skillsContainer}>
              <p>Front-End</p>
            <div>
              <p>REACT</p>
              <p>HTML</p>
              <p>CSS</p>
              
            </div>
          </div>
          <button
            className={style.languageButton}
            onClick={() => changeLanguage(language)}
          >
            {language === "es" ? "change to english" : "cambiar a español"}
          </button>
        </>
      ) : (
        <>
          <NavBar language={language} />
          <div className={style.aboutContainer}>
            <p className={style.about}>
              I'm twenty-three year old {" "}
              <span className={style.colorText}>FullStack Developer.</span>{" "}
              I strive to create technological solutions that improve people's lives. <br />
              <br /> Starting to develop changed my perspective, driving me to maximize each project with a constant focus on quality. I am passionate about learning new technologies and exploring creative solutions. <br />
              <br /> I seek to collaborate in dynamic teams where I can enrich myself and contribute significantly. <br />
              <br /> Currently living in{" "}
              <span className={style.colorText}>Buenos Aires, Argentina.</span>
            </p>
          </div>
          <hr />
          <button
            className={style.languageButton}
            onClick={() => changeLanguage(language)}
          >
            {language === "es" ? "change to english" : "cambiar a español"}
          </button>
        </>
      )}
    </>
  );
}
{
  /* <button className={style.languageButton} onClick={() =>changeLanguage(language)}>{language === "es" ? "change to english" : "cambiar a español" }</button> */
}
export default Español;
