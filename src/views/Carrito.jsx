import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import { PedidoContext } from '../context/PedidoContext'
import { TotalContext } from '../context/TotalContext'
import Botones from '../components/Botones'

const Carrito = () => {
  const {pedido, setPedido} = useContext(PedidoContext)
  const {total,setTotal} = useContext(TotalContext) 


  const navigate = useNavigate()
  const volverAlHome = ()=>{
    navigate('/')
  }
  return (
    <div style={{backgroundColor:'#f5f5f5'}}>
      <p className='mb-1 mt-3' style={{textAlign:'start',paddingLeft:'32px'}}>Detalles del pedido:</p>
      <ul className='pe-2'>
        {
          pedido.map(detalle =>
            <li className='py-2 between' style={{textAlign:'start',listStyleType:'none',borderBottom:'1px lightgray solid'}} key={detalle.name}>
              <div className='d-flex'>
                <img src={detalle.img} style={{width:'25px',height:'25px',borderRadius:'50%'}}/>
                <p className='ms-2 my-0'>{detalle.name}</p>                
              </div>
              <Botones price={detalle.precio}/>
            </li>
          )
        }
      </ul>
      <h2 className='ms-2' style={{textAlign:'start'}}>{`Total: $${total}`}</h2>
      <div className='between pb-2'>
        <Button className='ms-2' variant='success' style={{color:'white'}}>Ir a pagar</Button>
        <Button className='me-2' variant='info' onClick={volverAlHome} style={{color:'white'}}>Volver al inicio</Button>
      </div>
    </div>
  )
}

export default Carrito