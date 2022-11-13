//Componente Contador
import { useState } from "react"

const Contador = () => {
    const [contador,setContador]=useState(0) 
        const add =()=>{
        setContador(contador+1)
        }
    return (
    console.log(contador)
  )
}

export default Contador