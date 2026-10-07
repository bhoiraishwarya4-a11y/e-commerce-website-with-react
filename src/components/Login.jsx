import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import {
    FaUser,
    FaLock,
    FaSignInAlt,
    FaUserPlus,
    FaShoppingBag
} from 'react-icons/fa'

import './Login.css'


const Login = ({ setLoggedUser }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [savedUser, setSavedUser] = useState(null)

    const navigate = useNavigate()


    // =================================
    // GET USER FROM LOCAL STORAGE
    // =================================

    function fetchData() {

        const savedUserData =
            JSON.parse(localStorage.getItem('b87'))

        setSavedUser(savedUserData)

    }


    useEffect(() => {

        fetchData()

    }, [])


    // =================================
    // LOGIN FUNCTION
    // =================================

    const handleLogin = (event) => {

        event.preventDefault()


        // Empty fields

        if (!email || !password) {

            toast.error('Please enter email and password')

            return
        }


        // User not registered

        if (!savedUser) {

            toast.error('No account found. Please register first.')

            return
        }


        // Email check

        if (email !== savedUser.email) {

            toast.error('Invalid email')

            return
        }


        // Password check

        if (password !== savedUser.password) {

            toast.error('Incorrect password')

            return
        }


        // Login successful

        setLoggedUser(savedUser)


        toast.success('Login successful!')


        setTimeout(() => {

            navigate('/dashboard')

        }, 700)

    }


    return (

        <div className="login-page">


            {/* ================================= */}
            {/* LEFT SIDE */}
            {/* ================================= */}

            <div className="login-left">

                <div className="login-left-content">


                    {/* Logo */}

                    <div className="login-logo">

                        🛍️ Shop<span>Zone</span>

                    </div>


                    {/* Icon */}

                    <div className="login-shopping-icon">

                        <FaShoppingBag />

                    </div>


                    <h1>
                        Welcome Back!
                    </h1>


                    <p>
                        Login to your ShopZone account
                        and continue your amazing
                        shopping journey.
                    </p>


                    <div className="login-points">

                        <div>
                            <span>✓</span>
                            Discover amazing products
                        </div>

                        <div>
                            <span>✓</span>
                            Get the best deals
                        </div>

                        <div>
                            <span>✓</span>
                            Enjoy a smooth shopping experience
                        </div>

                    </div>


                </div>

            </div>


            {/* ================================= */}
            {/* RIGHT SIDE */}
            {/* ================================= */}

            <div className="login-right">

                <div className="login-box">


                    {/* Heading */}

                    <div className="login-heading">

                        <div className="login-icon">

                            <FaSignInAlt />

                        </div>


                        <h2>
                            Login
                        </h2>


                        <p>
                            Sign in to your ShopZone account
                        </p>

                    </div>


                    {/* ================================= */}
                    {/* FORM */}
                    {/* ================================= */}

                    <form onSubmit={handleLogin}>


                        {/* Email */}

                        <div className="login-input-group">

                            <label>
                                Email Address
                            </label>


                            <div className="login-input-box">

                                <FaUser />


                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        {/* Password */}

                        <div className="login-input-group">

                            <label>
                                Password
                            </label>


                            <div className="login-input-box">

                                <FaLock />


                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        {/* Login Button */}

                        <button
                            type="submit"
                            className="login-button"
                        >

                            <FaSignInAlt />

                            Login

                        </button>


                    </form>


                    {/* ================================= */}
                    {/* REGISTER */}
                    {/* ================================= */}

                    <div className="login-register">

                        <span>
                            Don't have an account?
                        </span>


                        <Link to="/register">

                            <FaUserPlus />

                            Create Account

                        </Link>

                    </div>


                </div>

            </div>


            {/* Toast */}

            <ToastContainer
                position="top-right"
                autoClose={2000}
            />

        </div>

    )

}

export default Login