import style from './hero.module.scss';

export default function HeroSection(props) {
  return (
    <section className={style.hero}>           
                <h1 className={style.maintitle}>{props.maintitle}</h1>
                <p className={style.detail}>{props.detail}</p>
    </section>
  )
}