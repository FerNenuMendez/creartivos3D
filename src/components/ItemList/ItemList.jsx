import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({product}) => {
  
  return (
    <div className="itemList">
        <Item product={product}/>
    </div>
  )
}

export default ItemList