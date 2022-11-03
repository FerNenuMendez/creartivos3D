import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
  return (
    <section id="catalogo" className="list__container">

      <div className="list__container__catalogo">
        <ItemList/>
      </div>
    </section>
  )
}

export default ItemListContainer