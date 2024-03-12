import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { PedidoContext } from '../context/PedidoContext'
import { TotalContext } from '../context/TotalContext'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import PizzaLogo from '../assets/imgs/pizza-logo.png'
import Ojos from '../assets/imgs/ojos-logo.png'
import Carro from '../assets/imgs/carrito-logo.png'

const CardPizza = ({pizza}) => {
  const {pedido, setPedido} = useContext(PedidoContext)
  const {total,setTotal} = useContext(TotalContext)

  const agregar = () => {
    let pedidoIn = false
    pedido.forEach(pizzaInfo =>{
      if(pizzaInfo.id === pizza.id){
        pedidoIn = true
      }
    })
    if(!pedidoIn){
      setPedido([...pedido,{id:pizza.id,img:pizza.img,name:pizza.name,precio:pizza.price}])
      setTotal(total+pizza.price)
    }       
  }

  const navigate = useNavigate()
  const IrAProducto = () => {
    navigate(`/producto/${pizza.name}`)
  }

  return (
    <Card className='mt-2 mb-2 marginLowResolution' style={{ width: '15rem' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body className='pb-0' style={{borderBottom:'1px solid lightgray'}}>
            <Card.Title className='pb-2' style={{borderBottom:'1px solid gray'}}>{pizza.name}</Card.Title>
            <p style={{fontWeight:'700',textAlign:'left'}}>Ingredientes: </p>
            {
              pizza.ingredients.map(ing =>
                <>
                  <div className='d-flex mb-2'>
                    <img className='me-2' style={{width:'25px',height:'25px'}} src={PizzaLogo}/><p className='mb-0'>{ing}</p>
                  </div>
                </>
              )
            }
        </Card.Body>
        <div>
          <h2 className='my-3'>{`$ ${pizza.price}`}</h2>
          <Button className='mb-1 me-2' variant='info' onClick={IrAProducto}>
            <div className='d-flex'><p className='m-0' style={{width:'60px'}}>Ver más</p><img style={{width:'25px',height:'25px'}} src={Ojos} /></div>
          </Button>
          <Button className='mb-1' variant='danger' onClick={agregar}>
            <div className='d-flex'><p className='m-0' style={{width:'60px'}}>Añadir</p><img style={{width:'25px',height:'25px'}} src={Carro} /></div>       
          </Button>
        </div>
    </Card>
  )
}

CardPizza.propTypes = {}

export default CardPizza