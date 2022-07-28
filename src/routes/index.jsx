import React,{lazy} from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '@/pages/Home'
const Orders =lazy(()=>import('@/pages/Orders'))
const Digital =lazy(()=>import('@/pages/Digital'))
const Purchase =lazy(()=>import('@/pages/Purchase'))
const Cart=lazy(()=>import('@/pages/Cart'))

export default function RoutesConfig() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={"/home"} replace />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/digital' element={<Digital />} />
        <Route path='/purchase/:id' element={<Purchase/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  )
}
