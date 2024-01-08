import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import style from "../styles/SocialMedia.module.css";

function SocialMedia() {
  return (
    <>
      <a
        className={style.button}
        href="https://github.com/tobiasNicolasN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        className={style.button}
        href="https://www.linkedin.com/in/tobiasnicolasn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </>
  );
}

export default SocialMedia;
