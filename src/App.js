import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login';
import { useAuth } from './Context/GlobalState';
import {auth} from "./firebase"
import { type } from '@testing-library/user-event/dist/type';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Order from './components/Order';

const App = () => {
  const {dispatch} =useAuth()
  const stripePromise= loadStripe(
    "pk_live_51QSG05Glr8scqLSr11YBwZLj3wv5j1fpE7y4SM3kJHHVrGlhuXxfMD4JnsUFMxm4iLu6qZq2jeTkLP0SczmTLjwG00VzAQHByx"
  )
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser,
        });  
      }else{
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });
  },[])
  return (
    <div className='app'>
    <Routes>
      <Route path='/' 
      element={
        <>
      <Header/>
      <Home/>
      </>
      }
      />
      <Route path="/checkout" element={
        <>
        <Header/>
        <Checkout/>
        </>
      }
      />
      <Route path='/payment'element = {
        <>
        <Header/>
        <Elements stripe={stripePromise}> <Payment/></Elements>
      
        </>
      }
      />
      <Route
      path="/orders"
      element={
        <>
        <Header/>
        <Order/>
        </>
      }
      />
      <Route path="*" element={<h>Page not Found</h>}/>
      <Route path='/login' element={<Login />} /> 
    </Routes>
    </div>
  )
}

export default App;