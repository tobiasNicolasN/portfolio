import { useNavigate } from "react-router-dom";
import style from "./Navigate.module.css";

interface NavigateProps {
  path: string;
  buttonText?: string;
}

function Navigate({ path, buttonText }: NavigateProps) {
  const navigate = useNavigate();
  function goTo(path: string) {
    navigate(path);
  }

  return (
    <button className={style.navButton} onClick={() => goTo(path)}>
      <div className={style.light}></div>
      <span>{buttonText}</span>
    </button>
  );
}

export default Navigate;
