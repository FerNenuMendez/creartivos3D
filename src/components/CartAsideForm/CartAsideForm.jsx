import './CartAsideForm.css'

const CartAsideForm = () => {
  return (
    <form className='cartAsideForm'>
        <h2 className='cartAsideForm__h2'>DATOS DEL COMPRADOR</h2>
        <div className='cartAsideForm__form'>
            <label className='cartAsideForm__label'>Nombre</label>
            <input name='nombre'  className='cartAsideForm__input'/>
            <label className='cartAsideForm__label'>Apellido</label>
            <input name='apellido'  className='cartAsideForm__input'/>
            <label className='cartAsideForm__label'>Telefono</label>
            <input name='apellido'   className='cartAsideForm__input'/>
            <label className='cartAsideForm__label'>Email</label>
            <input name='email' type='email'  className='cartAsideForm__input'/>
        </div>
    </form>
  )
}

export default CartAsideForm