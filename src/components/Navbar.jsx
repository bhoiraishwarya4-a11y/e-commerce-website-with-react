import React from 'react'
import { FaUser, FaShoppingCart, FaHome, FaTags } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import './Navbar.css'


const Navbar = ({ loggedUser, setLoggedUser }) => {

  const navigate = useNavigate()

  function handleLogout() {
    setLoggedUser('')
    navigate('/')
  }

  return (

    <nav className="navbar navbar-expand-lg shopzone-navbar">

      <div className="container">

        {/* Logo */}
        <a
          className="navbar-brand shopzone-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            navigate('/dashboard')
          }}
        >
          <span className="logo-icon">🛍️</span>
          Shop<span>Zone</span>
        </a>


        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shopzoneNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse"
          id="shopzoneNavbar"
        >

          {/* Menu */}
          <div className="navbar-nav mx-auto">

            <a
              className="nav-link shopzone-link"
              href="#Home"
              onClick={(e) => {
                e.preventDefault()
                navigate('/dashboard')
              }}
            >
              <FaHome className="me-1" />
              Home
            </a>


            <a
              className="nav-link shopzone-link"
              href="#products"
            >
              <FaTags className="me-1" />
              Products
            </a>


            <a
              className="nav-link shopzone-link"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <FaShoppingCart className="me-1" />
              Cart
            </a>

          </div>


          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            <div className="shopzone-user">

              <div className="user-icon">
                <FaUser />
              </div>

              <span>
                {loggedUser && loggedUser.name}
              </span>

            </div>


            {/* Logout */}
            <button
              className="shopzone-logout"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </nav>

  )
}

export default Navbar