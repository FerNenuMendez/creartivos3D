import './ItemListContainer.css'


const ItemListContainer = (props) => {
  return (
    <section id="inicio" className="list__container">
      <div className="list__container__glass">
        <h2 className='list__container__h2'>{props.name}</h2>
      </div>
    </section>
  )
}

export default ItemListContainer