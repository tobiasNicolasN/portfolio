import About from "../components/About";
import NavBar from "../components/NavBar";
import Skills from '../components/Skills'

function English() {
  return <body>
  <div>
    <NavBar homeLang="Home" projectsLang="Projects" />;
    <About
      about="About me"
      info="I'm Tobias, a twenty-three year old FullStack Developer from Buenos Aires, Argentina. - I am a one-year-experienced, passionate about bringing ideas to life. I love learning new technologies and exploring creative solutions. I am seeking team collaboration to grow and make a substantial contribution to development."
    />
    <Skills title="Skills"/>
  </div>
</body>;
}

export default English;
