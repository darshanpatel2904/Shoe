import ShoeItem from '../shoeItem'

export default function ShoeList(props) {
  
  return (
    
    props.items.map((item) => <ShoeItem key={item.id} id={item.id} title={item.title} path={item.path} classNames={item.classNames} desc={item.desc}/>)
    
  )
}
