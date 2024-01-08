import About from "../components/About";
import Bg from "../components/Bg";
import NavBar from "../components/NavBar";

function Español() {
  return (
    <body>
      <Bg />
      <div>
        <NavBar homeLang="Inicio" proyectsLang="Proyectos" />;
        <About
          about="Sobre mi"
          info="Soy un desarrollador FullStack con un año de experiencia, especializado en el uso de TypeScript con React. Además, cuento con conocimientos sólidos en Node.js, JavaScript, CSS, Git y MongoDB. Actualmente, explorando el mundo mobile y ampliando mis habilidades aprendiendo Dart y Flutter."
        />
      </div>
    </body>
  );
}

export default Español;
