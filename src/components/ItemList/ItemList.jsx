import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({add}) => {
  return (
    <div className="itemList">
        <Item add={add}/>
    </div>
  )
}

export default ItemList