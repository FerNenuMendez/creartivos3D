

const BtnAdd = ({setContador}) => {
  return (
  <div>
    <button className="BtnAdd" onClick={()=>setContador((valorActual)=>valorActual+1)}>Agregar al Carrito</button>
  </div>  
  )
}

export default BtnAdd