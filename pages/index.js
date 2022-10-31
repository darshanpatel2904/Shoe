import styles from '../styles/variables.module.scss'
import HeroSection from "../components/hero"
import ShoeList from '../components/shoeList'

export default function Home() {
  const d_items =[
    {   
        id : 1,
        title : 'shoe1',
        path : '/1.jpg',
        classNames : 'feature',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero necessitatibus placeat dolorem corrupti repudiandae nulla perferendis veritatis?',
    },
    {
        id : 2,
        title : "shoe2",
        path : '/2.jpg',
        classNames : 'feature',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero necessitatibus placeat dolorem corrupti repudiandae nulla perferendis veritatis?',
    },
    {
        id : 3,
        title : "shoe3",
        path : '/3.jpg',
        classNames : 'feature',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero necessitatibus placeat dolorem corrupti repudiandae nulla perferendis veritatis?',
    },

]
  return (
    <>
      <HeroSection maintitle={"Regain your confidence on the court."} detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et excepturi magni tempore? Ad officiis soluta est doloremque doloribus, perferendis ipsam itaque facilis molestias, blanditiis alias optio! Ad, suscipit aspernatur."}/>
      <ShoeList items={d_items}/>
    </>
  )
}
