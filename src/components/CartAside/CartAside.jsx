import './CartAside.css'
import swal from 'sweetalert';
import { useContext, useState} from "react"
import { cartContext } from '../../context/cartProvider'

import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore'
import moment from 'moment' 



const CartAside = () => {
  const {cart}=useContext(cartContext)
  const [formValues, setFormValues] = useState({
    nombre:'',
    apellido:'',
    telefono:'',
    email:'',
  })
  const precios=cart.map((item)=>{
    const producto=item.product
    const cantidad=item.quantity
    const precio = producto.precio*cantidad
    return(
      precio 
    )
  })

  const initialValue = 0;
  const total = precios.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const finalizarCompra=()=>{
    const createOrder=()=>{
    const db = getFirestore()
    const query = collection(db,'Order')
    const newOrder = {
      date: moment().format('DD/MM/YYYY'),
      buyer:{
        apellido: formValues.apellido,
        email: formValues.email,
        nombre: formValues.nombre,
        telefono: formValues.telefono,
      },
      items:cart,
      total:total,
    };
    addDoc(query, newOrder)
    .then((response)=>{
      swal({
      title: "Su pedido se ha realizado con exito.",
      text: `Su Numero de Orden es: ${response.id}. Gracias por su compra!`,
      icon: "success",
      button: "Ok",
      })
      .then((response)=>{
        cart.map((item)=> {
          const producto=item.product
          const cantidad=item.quantity
          const query = doc(db,'Mates',producto.id)
          
          updateDoc(query,{
            stock: producto.stock - cantidad
          })
          return response
        })
      })
      .then(()=>{window.location.href='/'});
    })
    .catch((error)=>{console.log(error)})
    }
    createOrder()
  }

  const cambioInput=(event)=>{
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className='cartAside'>
        <form className='cartAsideForm'>
          <h2 className='cartAsideForm__h2'>DATOS DEL COMPRADOR</h2>
          <div className='cartAsideForm__form'>
              <label className='cartAsideForm__label'>Nombre</label>
              <input name='nombre'  className='cartAsideForm__input' value={formValues.nombre} onChange={cambioInput}/>
              <label className='cartAsideForm__label'>Apellido</label>
              <input name='apellido'  className='cartAsideForm__input' value={formValues.apellido} onChange={cambioInput}/>
              <label className='cartAsideForm__label'>Telefono</label>
              <input name='telefono'   className='cartAsideForm__input' value={formValues.telefono} onChange={cambioInput}/>
              <label className='cartAsideForm__label'>Email</label>
              <input name='email' type='email'  className='cartAsideForm__input' value={formValues.email} onChange={cambioInput}/>
          </div>
        </form>
        <h2 className='cartAside__title'>RESUMEN DE SU COMPRA</h2>
        <h2 className='cartAside__h2'>Cantidad de productos: {cart.length}</h2>
        <h2 className='cartAside__h2'>Su total es ${total}</h2>
        <button className='cartAside_Btn' onClick={finalizarCompra}>Finalizar Compra</button>
        <h3 className='cartAside__h3'>OPCIONES DE PAGO</h3>
        <div className='tarjeta__contenedor'>
          <img src={`/tarjetas/mastercard__logo.png`} alt="tarjetas" className='cartAside__tarjeta'/>
          <img src={`/tarjetas/Former_Visa_(company)_logo.svg`} alt="tarjetas" className='cartAside__tarjeta'/>
          <img src={`tarjetas/version-horizontal-large-logo-mercado-pago.webp`} alt="tarjetas" className='cartAside__tarjetas'/>
        </div>
        <h4 className='cartAside__h4'>Todos sus datos permaneceran protegidos, en breve le llegara un mail de confirmacion.</h4>
    </div>
  )
}

export default CartAside