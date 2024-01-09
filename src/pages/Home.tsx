import Navigate from "../components/Navigate";
import style from "../styles/Home.module.css";
import SocialMedia from "../components/SocialMedia";

function Home() {
  return (
    <body>
      <div className={style.container}>
        <h1 className={style.text1}>Tobias Nicolas Nuñez</h1>
        <h2 className={style.text2}>FullStack Developer</h2>
        <div className={style.buttons}>
          <Navigate path="/en" buttonText="Check my work" />
          <Navigate path="/es" buttonText="Revisar mi trabajo" />
        </div>
      </div>
      <div className={style.social}>
        <SocialMedia />
      </div>
    </body>
  );
}

export default Home;
