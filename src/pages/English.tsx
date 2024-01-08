import About from "../components/About";
import Bg from "../components/Bg";
import NavBar from "../components/NavBar";

function English() {
  return <body>
  <Bg />
  <div>
    <NavBar homeLang="Home" proyectsLang="Proyects" />;
    <About
      about="About me"
      info="I am a FullStack Developer with one year of experience, specializing in the use of TypeScript with React. Additionally, I have solid knowledge in Node.js, JavaScript, CSS, Git, and MongoDB. Currently, I am exploring the mobile world and expanding my skills by learning Dart and Flutter."
    />
  </div>
</body>;
}

export default English;
