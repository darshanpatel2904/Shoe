import ShoeDisplay from '../shoeDisplay'
import style from './imageDisplayList.module.scss'

export default function ShoeDisplayList(props) {
  const items =[
    {   
        id : 4,
        title : 'shoe1',
        path : '/4.jpg',
        price : '9999/-'
    },
    {
        id : 5,
        title : "shoe2",
        path : '/5.jpg',
        price : '9999/-'
    },
    {   
      id : 6,
      title : 'shoe1',
      path : '/6.jpg',
      price : '9999/-'  
    },
    {   
      id : 7,
      title : 'shoe1',
      path : '/7.jpg',
      price : '9999/-'  
    },
    {   
      id : 8,
      title : 'shoe1',
      path : '/8.jpg',
      price : '9999/-'  
    },
    {   
      id : 9,
      title : 'shoe1',
      path : '/9.jpg',
      price : '9999/-'
  },
  {   
      id : 10,
      title : 'shoe1',
      path : '/10.jpg',
      price : '9999/-'
  },
  {   
    id : 11,
    title : 'shoe1',
    path : '/11.jpg',
    price : '9999/-'
  }
]
  return (
    <div className={style.wrapper}>
      <ShoeDisplay id={items[0].id} title={items[0].title} path={items[0].path} price={items[0].price}/>
      <ShoeDisplay id={items[1].id} title={items[1].title} path={items[1].path} price={items[1].price}/>
      <ShoeDisplay id={items[2].id} title={items[2].title} path={items[2].path} price={items[2].price}/>
      <ShoeDisplay id={items[3].id} title={items[3].title} path={items[3].path} price={items[3].price}/>
      <ShoeDisplay id={items[4].id} title={items[4].title} path={items[4].path} price={items[4].price}/>
      <ShoeDisplay id={items[5].id} title={items[5].title} path={items[5].path} price={items[5].price}/>
      <ShoeDisplay id={items[6].id} title={items[6].title} path={items[6].path} price={items[6].price}/>
      <ShoeDisplay id={items[7].id} title={items[7].title} path={items[7].path} price={items[7].price}/>
    </div>
  )
}
