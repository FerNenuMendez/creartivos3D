import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  data  from '../../data/catalogomates'


const ItemListContainer = () => {
  const [items , setItems] = useState([]);
  const {linea} = useParams();

const getProducts = new Promise((res,rej)=>{
  setTimeout(()=>{  
    if(linea){
    const filtrarData= data.filter((product)=>{
      return product.linea === linea
    })
    res(filtrarData)
    } else {
      res(data)
    }
  }, 2000)
})

useEffect(() => {
  getProducts
  .then((res)=> setItems(res))
  .catch((error)=>console.log(error))  
}, [linea])

  return (
    <section id="catalogo" className="list__container">
      <div className="list__container__catalogo">
        <ItemList product={items}/>
      </div>
    </section>
  )
}

export default ItemListContainer