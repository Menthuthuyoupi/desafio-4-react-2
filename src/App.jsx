import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import PedidoProvider from './context/PedidoContext'
import TotalProvider from './context/TotalContext'

import NavBar from './components/NavBar'
import Home from './views/Home'
import Producto from './views/Producto'
import Carrito from './views/Carrito'

function App() {


  return (
    <>
      <BrowserRouter>
        <TotalProvider>
        <PedidoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/producto/:id' element={<Producto />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </PedidoProvider>         
        </TotalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
