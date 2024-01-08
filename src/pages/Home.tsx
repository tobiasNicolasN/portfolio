import Navigate from "../components/Navigate";
import styles from "./Home.module.css";
import SocialMedia from '../components/SocialMedia'

function Home() {
  return (
    <body>
      <div className={styles.container}>
        <h1>Tobias Nicolas Nuñez</h1>
        <h2>FullStack Developer</h2>
        <div className={styles.buttons}>
          <Navigate path="/en" buttonText="English" />
          <Navigate path="/es" buttonText="Español" />
        </div>
        <div className={styles.social}>
          <SocialMedia />
        </div>
      </div>
    </body>
  );
}

export default Home;
