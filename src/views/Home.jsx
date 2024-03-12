import React from 'react'

import Container from 'react-bootstrap/Container'

import Pizzas from '../pizzas.json'
import CardPizza from '../components/CardPizza'

const Home = () => {
  return (
    <>
      <Container className='p-0'>
        <div className='bg-pizza centralizar'>
          <div>
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores Pizza que podrás encotrar</p>
          </div>
        </div>
        <Container className='gridPizza'>
          {
            Pizzas.map(pizza =>
              <>
                <CardPizza pizza={pizza} />           
              </>
            )
          }
        </Container>
      </Container>
    </>
  )
}

export default Home