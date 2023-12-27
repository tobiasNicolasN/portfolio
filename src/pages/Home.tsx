import Navigate from "../components/Navigate";
import styles from "./Home.module.css";

function Home() {
  return (
    <body>
      <div className={styles.container}>
        <div>
          <h1>Tobias Nicolas Nuñez</h1>
          <h2>FullStack Developer</h2>
        </div>
        <div className={styles.buttons}>
          <Navigate path="/en" buttonText="English" />
          <Navigate path="/es" buttonText="Español" />
        </div>
      </div>
    </body>
  );
}

export default Home;
