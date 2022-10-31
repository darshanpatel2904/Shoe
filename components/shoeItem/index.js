import style from './ShoeItem.module.scss';

export default function ShoeItem(props) {
   
  return (
    <section className={style.moreinfo}> 
        <div className={style[props.classNames]}>
            <div className={style.content}>
                <p className={style.title}>{props.title}</p>
                <p className={style.desc}>{props.desc}</p>
            </div>
            <img className={style.shoeimg} src={props.path} alt={props.title} onClick={()=>{window.open(`${props.path}`,"_self")}}/>
        </div>
    </section>
  )
}
