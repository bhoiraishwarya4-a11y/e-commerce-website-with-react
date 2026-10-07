import React from 'react'
import { FaArrowRight, FaShoppingBag, FaTruck, FaShieldAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {

    const navigate = useNavigate()

    const handleShopNow = () => {
        const productsSection = document.getElementById('products')

        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="shopzone-hero">

            <div className="container">

                <div className="row align-items-center">

                    {/* LEFT SIDE */}
                    <div className="col-lg-6">

                        <div className="hero-content">

                            <span className="hero-badge">
                                <FaShoppingBag />
                                Welcome to ShopZone
                            </span>

                            <h1>
                                Shop Smart.
                                <br />
                                <span>Live Better.</span>
                            </h1>

                            <p>
                                Discover amazing products at the best prices.
                                Shop your favourite products from one place
                                with a smooth and easy shopping experience.
                            </p>

                            <button
                                className="hero-btn"
                                onClick={handleShopNow}
                            >
                                Shop Now
                                <FaArrowRight />
                            </button>


                            {/* FEATURES */}

                            <div className="hero-features">

                                <div className="hero-feature">

                                    <div className="feature-icon">
                                        <FaTruck />
                                    </div>

                                    <div>
                                        <h6>Fast Delivery</h6>
                                        <p>Quick & safe delivery</p>
                                    </div>

                                </div>


                                <div className="hero-feature">

                                    <div className="feature-icon">
                                        <FaShieldAlt />
                                    </div>

                                    <div>
                                        <h6>Secure Shopping</h6>
                                        <p>100% secure checkout</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="col-lg-6">

                        <div className="hero-image-area">

                            <div className="hero-circle"></div>

                            <div className="hero-card card-one">
                                🛍️
                            </div>

                            <div className="hero-card card-two">
                                👟
                            </div>

                            <div className="hero-card card-three">
                                💻
                            </div>

                            <div className="hero-main-image">
                                🛒
                            </div>

                            <div className="discount-badge">
                                <strong>50%</strong>
                                <span>OFF</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default HeroSection
