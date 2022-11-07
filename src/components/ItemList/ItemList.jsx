import Item from '../Item/Item'
import itemListStyles from './itemListStyles.css'

const ItemList = ({add}) => {
  return (
    <div className="itemList">
        <Item add={add}/>
    </div>
  )
}

export default ItemList