import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({product}) => {
  
  return (
    <div className="itemList">
      <div className='itemList__anexo'>
        <Item product={product}/>
      </div>
    </div>
  )
}

export default ItemList