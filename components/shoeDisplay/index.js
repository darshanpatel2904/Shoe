import { useRouter } from 'next/router';
import style from './shoeDisplay.module.scss';
import Image from 'next/image';

export default function ShoeDisplay(props) {
  
  const router = useRouter();
  function showDetailsHandler(){
    router.push('/' + props.id);
  
  }   
  return (
    <div className={style.container}>
           <Image src={props.path} alt={props.title} onClick={()=>{window.open(`${props.path}`,"_self")}} width={260} height={190}/>
           <p className={style.title}>{props.title}</p>
           <p className={style.price}>{props.price}</p>
    </div>
  )
}
