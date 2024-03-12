import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { PedidoContext } from '../context/PedidoContext'
import { TotalContext } from '../context/TotalContext'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Pizzas from '../pizzas.json'
import PizzaLogo from '../assets/imgs/pizza-logo.png'
import Carro from '../assets/imgs/carrito-logo.png'

const Producto = () => {
  const {pedido, setPedido} = useContext(PedidoContext)
  const {total, setTotal} = useContext(TotalContext)

  const { id } = useParams()
  const navigate = useNavigate()
  const volverAlHome = ()=>{
    navigate('/')
  }
  const agregar = () => {
    let pedidoIn = false
    pedido.forEach(pizzaInfo =>{
      if(pizzaInfo.name === id){
        pedidoIn = true
      }
    })
    console.log(pedidoIn)
    if(!pedidoIn){
      Pizzas.forEach(pizzaIn => {
        if(pizzaIn.name === id){
          setPedido([...pedido,{id:pizzaIn.id,img:pizzaIn.img,name:pizzaIn.name,precio:pizzaIn.price}])
          setTotal(total+pizzaIn.price)
        }
      })
    }       
  }

  return (
    <div>
      {
        Pizzas.map(pizza =>{
          if(pizza.name === id){
            return <>                     
                      <Card className='mt-1 mb-3' style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body className='p-1' style={{borderBottom:'1px solid lightgray'}}>
                          <Card.Title className='pb-2' style={{borderBottom:'1px solid gray',textAlign:'start'}}>{pizza.name}</Card.Title>
                          <Card.Text style={{textAlign:'start'}}>{pizza.desc}</Card.Text>
                          <p style={{fontWeight:'700',textAlign:'left'}}>Ingredientes: </p>
                          {
                            pizza.ingredients.map(ing =>
                              <>
                                <div className='d-flex mb-2'>
                                  <img className='me-2' style={{width:'25px',height:'25px'}} src={PizzaLogo}/><p>{ing}</p>
                                </div>
                              </>
                            )
                          }
                        </Card.Body>
                        <div className='d-flex justify-content-between p-1'>
                          <h2 >{`$ ${pizza.price}`}</h2>
                          <div>
                            <Button variant='danger' className='me-2'>
                              <div className='d-flex' onClick={agregar}><p className='m-0' style={{width:'60px'}}>Añadir</p><img style={{width:'25px',height:'25px'}} src={Carro} /></div>       
                            </Button>
                            <Button variant='info' onClick={volverAlHome} style={{color:'white'}}>Volver al inicio</Button>
                          </div>
                        </div>
                      </Card>                     
                  </>
          }
        })
      }
    </div>
  )
}

export default Producto