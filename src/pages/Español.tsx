import About from "../components/About";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import style from '../styles/Español.module.css'

function Español() {
  return (
    <body className={style.body}>
      <div className={style.about}>
        <NavBar homeLang="Inicio" projectsLang="Proyectos" />;
        <About
          about="Sobre mi"
          info="Soy Tobias, un desarrollador fullstack de veintitrés años de Buenos Aires, Argentina. Con un año de experiencia, apasionado por materializar ideas. Me encanta aprender nuevas tecnologías y explorar soluciones creativas. Busco colaborar en equipos para enriquecerme y contribuir de manera significativa al desarrollo."
        />
        <Skills title="Habilidades"/>
      </div>
    </body>
  );
}

export default Español;
