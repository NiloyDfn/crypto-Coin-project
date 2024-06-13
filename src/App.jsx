import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

import Home from './Components/Home'
import Header from './Components/Header'
import Coins from './Components/Coins'
import Exchanges from './Components/Exchanges'
import CoinsDetails from './Components/CoinsDetails'
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/coin/:id' element={<CoinsDetails/>}/>
      </Routes>
    </Router>
  )

}

export default App