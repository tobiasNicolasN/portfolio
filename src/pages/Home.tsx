import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import style from "../styles/Home.module.css";

function Home1() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.container}>
        <h1 className={style.text1}>Tobias Nicolas Nuñez</h1>
        <h2 className={style.text2}>FullStack Developer</h2>
        <div className={style.langButtons}>
          <button className={style.langButton} onClick={() => navigate("/es")}>
            Ver mi trabajo
          </button>
          <button className={style.langButton} onClick={() => navigate("/en")}>
            Check my work
          </button>
        </div>
      </div>
      <div className={style.socialButtons}>
        <a
          className={style.socialButton}
          href="https://github.com/tobiasNicolasN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          className={style.socialButton}
          href="https://www.linkedin.com/in/tobiasnicolasn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}

export default Home1;
