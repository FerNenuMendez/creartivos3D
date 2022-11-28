import './itemCount.css'
const ItemCount = ({count, setCount}) => {
  if(count<0){
    count=0
  }
  return (
    <div className='count'>
        <button className='count__btn' onClick={()=>setCount(count+1)}> + </button>
        <h3 className='count__h3'>{count}</h3>
        <button className='count__btn' onClick={()=>setCount(count-1)}> - </button>
    </div>
  )
}

export default ItemCount