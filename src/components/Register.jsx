import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaArrowLeft } from 'react-icons/fa'

import './Register.css'

const Register = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()


    // =========================
    // REGISTER FUNCTION
    // =========================

    const handleRegister = (event) => {

        event.preventDefault()


        // Empty fields check

        if (
            !userName ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            toast.error('Please fill all fields')
            return
        }


        // Password check

        if (password !== confirmPassword) {

            toast.error('Password and Confirm Password are not same')

            return
        }


        // User data

        const payload = {
            name: userName,
            email: email,
            password: password
        }


        // Save user in localStorage

        localStorage.setItem(
            'b87',
            JSON.stringify(payload)
        )


        toast.success('Registration successful!')


        // Login page वर जा

        setTimeout(() => {
            navigate('/')
        }, 1000)

    }


    return (

        <div className="register-page">


            {/* ========================= */}
            {/* LEFT SECTION */}
            {/* ========================= */}

            <div className="register-left">

                <div className="register-left-content">

                    <div className="register-logo">
                        🛍️ Shop<span>Zone</span>
                    </div>

                    <h1>
                        Start Your
                        <br />
                        Shopping Journey
                    </h1>

                    <p>
                        Create your ShopZone account and
                        discover amazing products, great deals
                        and a smooth shopping experience.
                    </p>


                    <div className="register-benefits">

                        <div>
                            <span>✓</span>
                            Easy & Fast Shopping
                        </div>

                        <div>
                            <span>✓</span>
                            Amazing Product Deals
                        </div>

                        <div>
                            <span>✓</span>
                            Secure Shopping Experience
                        </div>

                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* RIGHT SECTION */}
            {/* ========================= */}

            <div className="register-right">

                <div className="register-box">


                    {/* Back */}

                    <Link
                        to="/"
                        className="register-back"
                    >
                        <FaArrowLeft />
                        Back to Login
                    </Link>


                    {/* Heading */}

                    <div className="register-heading">

                        <div className="register-icon">
                            <FaUserPlus />
                        </div>

                        <h2>
                            Create Account
                        </h2>

                        <p>
                            Join ShopZone today
                        </p>

                    </div>


                    {/* Form */}

                    <form onSubmit={handleRegister}>


                        {/* Name */}

                        <div className="register-input-group">

                            <label>
                                Full Name
                            </label>

                            <div className="register-input-box">

                                <FaUser />

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        {/* Email */}

                        <div className="register-input-group">

                            <label>
                                Email Address
                            </label>

                            <div className="register-input-box">

                                <FaEnvelope />

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

                        <div className="register-input-group">

                            <label>
                                Password
                            </label>

                            <div className="register-input-box">

                                <FaLock />

                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        {/* Confirm Password */}

                        <div className="register-input-group">

                            <label>
                                Confirm Password
                            </label>

                            <div className="register-input-box">

                                <FaLock />

                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        {/* Register Button */}

                        <button
                            type="submit"
                            className="register-button"
                        >
                            <FaUserPlus />
                            Create Account
                        </button>


                    </form>


                    {/* Login */}

                    <div className="register-login">

                        Already have an account?

                        <Link to="/">
                            Login
                        </Link>

                    </div>


                </div>

            </div>


            <ToastContainer
                position="top-right"
                autoClose={2000}
            />

        </div>

    )
}

export default Register