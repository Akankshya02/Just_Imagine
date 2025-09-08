import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-pink-50 to-pink-200'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/buy' element={<BuyCredit/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>
    </div>
  )
}

export default App
