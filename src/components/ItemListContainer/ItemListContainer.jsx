import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { query, where, collection, getDocs, getFirestore } from 'firebase/firestore'




const ItemListContainer = () => {
  
  const [items , setItems] = useState([]);
  const {linea} = useParams();

  const getProducts=()=>{
    const db = getFirestore()
    const queryMates = collection(db,"Mates")

    if (linea) {
      const queryFilter=query(queryMates, where("linea","==", linea))
      getDocs(queryFilter)
      .then((response)=>{
        const data = response.docs.map((products)=>{
          return {id: products.id, ...products.data()}
        })
        setItems(data)
      })
      .catch((error)=>{console.log(error)})

    } else {
      getDocs(queryMates)
      .then((response)=>{
        const data = response.docs.map((products)=>{
          return {id: products.id, ...products.data()}
        })
        setItems(data)
      })
      .catch((error)=>{console.log(error)})
    }
  }
  
  useEffect(()=>{
    getProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linea])


  return (
    <section id="catalogo" className="list__container">
      <div className="list__container__catalogo">
        <ItemList product={(items)}/>
      </div>
    </section>
  )
}

export default ItemListContainer