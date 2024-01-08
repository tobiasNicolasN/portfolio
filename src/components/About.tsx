import style from '../styles/About.module.css'

interface IAboutProps {
    about: string,
    info: string
}

function About({about, info}: IAboutProps) {
  return (
    <div className={style.container}>
        <h1 className={style.about}>{about}</h1>
        <p className={style.info}>{info}</p>
    </div>
  )
}

export default About