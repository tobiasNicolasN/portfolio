import { useNavigate } from "react-router-dom";
import style from "../styles/Navigate.module.css";

interface INavigateProps {
  path: string;
  buttonText?: string;
}

function Navigate({ path, buttonText }: INavigateProps) {
  const navigate = useNavigate();
  function goTo(path: string) {
    navigate(path);
  }

  return (
    <button className={style.navButton} onClick={() => goTo(path)}>
      <span>{buttonText}</span>
    </button>
  );
}

export default Navigate;
