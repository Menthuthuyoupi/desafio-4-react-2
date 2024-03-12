import React, { useState, useContext } from 'react'

import { TotalContext } from '../context/TotalContext'

import Button from 'react-bootstrap/Button'

const Botones = ({price}) => {
    const [count, setCount] = useState(1)
    const {total,setTotal} = useContext(TotalContext)

    const incrementar = ()=>{
        setCount(count+1)
        setTotal(total+price)
    }
    const decrementar = ()=>{
        if(count > 1){
            setCount(count-1)
            setTotal(total-price)
        }            
    }

    return (
        <div className='d-flex'>
            <p className='my-0 me-1'>{`$ ${price*count}`}</p>           
            <Button variant='danger' className='py-0 px-2' onClick={decrementar}>-</Button>
            <p className='my-0 mx-1'>{count}</p>
            <Button className='py-0 px-2' onClick={incrementar}>+</Button>
        </div>
    )
}

export default Botones