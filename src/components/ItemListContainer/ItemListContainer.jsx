import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../data/catalogomates'
import { getProducts } from '../../data/catalogomates'


const ItemListContainer = () => {
  
  const [items , setItems] = useState([]);
  const {linea} = useParams();

  useEffect(() => {
        if (linea) {
          setTimeout(() => {
            getProductsByCategory(linea).then((products) => {
              setItems(products);
            });
          }, 2000);
        }
        else {
          getProducts().then((products) => {
            setItems(products);
          });
        }
  }, [linea]);

  return (
    <section id="catalogo" className="list__container">
      <div className="list__container__catalogo">
        <ItemList product={(items)}/>
      </div>
    </section>
  )
}

export default ItemListContainer