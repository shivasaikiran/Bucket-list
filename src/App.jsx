import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/productInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';

function App() {
  return (
    <MyState>
      
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/" element={
          <ProtectedRoutes>
            <Order/>
          </ProtectedRoutes>
        } />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
          <ProtectedRoutesForAdmin>
            <Dashboard/>
          </ProtectedRoutesForAdmin>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/addproduct" element={
          <ProtectedRoutesForAdmin>
            <AddProduct/>
          </ProtectedRoutesForAdmin>
        } />
        <Route path="/updateproduct" element={
          <ProtectedRoutesForAdmin>
            <UpdateProduct/>
          </ProtectedRoutesForAdmin>
        } />
        <Route path='/allproducts' element={<Allproducts/>}/>
        <Route path="/*" element={<Nopage/>} />
        
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>

    
  )
}

export default App

//user
export const ProtectedRoutes = ({ children}) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}

//admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if (admin.user.email === 'rahul1@gmail.com') {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}