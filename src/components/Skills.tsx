import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiVisualstudiocode,
  SiTypescript,
} from "react-icons/si";
import style from "../styles/Skills.module.css";

interface ISkillsProps {
  title: string;
}

function Skills({ title }: ISkillsProps) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.card}>
        <div className={style.icons}>
          <p title="React">
            <FaReact />
          </p>
          <p title="Html">
            <FaHtml5 />
          </p>
          <p title="Css">
            <FaCss3Alt />
          </p>
          <p title="Typescript">
            <SiTypescript />
          </p>
          <p title="Javascript">
            <SiJavascript />
          </p>
        </div>
          <div className={style.icons}>
          <p title="Node.js">
            <FaNodeJs />
          </p>
          <p title="MongoDB">
            <SiMongodb />
          </p>
          <p title="MySQL">
            <SiMysql />
          </p>
          <p title="Git">
            <FaGitAlt />
          </p>
          
          <p title="Visual Studio Code">
            <SiVisualstudiocode />
          </p>
          </div>
        <div />
      </div>
    </div>
  );
}

export default Skills;
