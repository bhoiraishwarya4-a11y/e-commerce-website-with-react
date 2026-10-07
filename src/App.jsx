import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import ProductDetails from './components/ProductDetails'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [loggedUser, setLoggedUser] = useState('')

  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={
            <Login setLoggedUser={setLoggedUser} />
          }
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={
            <Register />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              loggedUser={loggedUser}
              setLoggedUser={setLoggedUser}
            />
          }
        />

        {/* Product Details */}
        <Route
          path="/product-details/:prodID"
          element={
            <ProductDetails />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
