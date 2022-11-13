import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({add}) => {
  return (
    <section id="catalogo" className="list__container">

      <div className="list__container__catalogo">
        <ItemList add={add}/>
      </div>
    </section>
  )
}

export default ItemListContainer