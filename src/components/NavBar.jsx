import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { TotalContext } from '../context/TotalContext'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import Pizza from '../assets/imgs/pizza-logo.png'
import Carro from '../assets/imgs/carrito-logo.png'

const NavBar = () => {
    const setActiveClass = ({isActive}) => (isActive ? 'active' : undefined)
    const {total, setTotal} = useContext(TotalContext)
    return (
        <>
            <Navbar bg='info' className='py-2 px-5'>
                <Container className='mx-0 px-0'>
                    <div className='d-flex'>
                        <div style={{width:'25px',height:'25px'}}><img src={Pizza} style={{width:'100%',borderRadius:'50%'}} /></div>
                        <NavLink className={ setActiveClass } to='/' style={{paddingLeft:'5px',paddingRight:'10px',textDecoration:'none'}}>
                            Pizzería Mamma Mia!
                        </NavLink>
                    </div>
                    <div className='d-flex'>
                        <NavLink className={ setActiveClass } to='/carrito'>
                            <img src={Carro} style={{width:'100%',height:'30px'}}/>
                        </NavLink>
                        <p className='ps-1 m-0'>{`$ ${total}`}</p>
                    </div>
                </Container>
            </Navbar>
        </>
  )
}

export default NavBar