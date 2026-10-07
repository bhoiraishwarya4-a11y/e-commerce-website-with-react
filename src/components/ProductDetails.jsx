import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
    FaArrowLeft,
    FaShoppingCart,
    FaStar,
    FaTruck,
    FaShieldAlt,
    FaUndo,
    FaCheck,
    FaHeart
} from 'react-icons/fa'

import './ProductDetails.css'


const ProductDetails = () => {

    const { prodID } = useParams()

    const navigate = useNavigate()


    const [product, setProduct] = useState(null)

    const [selectedImage, setSelectedImage] = useState('')

    const [loading, setLoading] = useState(true)


    // =====================================
    // FETCH SINGLE PRODUCT
    // =====================================

    const fetchProduct = async () => {

        try {

            setLoading(true)

            const response = await fetch(
                `https://dummyjson.com/products/${prodID}`
            )

            const data = await response.json()

            setProduct(data)

            setSelectedImage(
                data.thumbnail
            )

        }
        catch (error) {

            console.log(
                'Error fetching product:',
                error
            )

        }
        finally {

            setLoading(false)

        }

    }


    // =====================================
    // CALL API
    // =====================================

    useEffect(() => {

        fetchProduct()

    }, [prodID])


    // =====================================
    // LOADING
    // =====================================

    if (loading) {

        return (

            <div className="product-loading">

                <div className="loading-spinner"></div>

                <h3>
                    Loading Product...
                </h3>

                <p>
                    Please wait
                </p>

            </div>

        )

    }


    // =====================================
    // PRODUCT NOT FOUND
    // =====================================

    if (!product || !product.id) {

        return (

            <div className="product-not-found">

                <h2>
                    Product Not Found
                </h2>

                <p>
                    Sorry, this product could not be found.
                </p>

                <button
                    onClick={() =>
                        navigate('/dashboard')
                    }
                >

                    Back to Products

                </button>

            </div>

        )

    }


    // =====================================
    // ORIGINAL PRICE
    // =====================================

    const originalPrice =
        product.discountPercentage
            ? (
                product.price /
                (
                    1 -
                    product.discountPercentage / 100
                )
            ).toFixed(2)
            : product.price


    // =====================================
    // PRODUCT IMAGES
    // =====================================

    const productImages = product.images?.length
        ? product.images
        : [product.thumbnail]


    // =====================================
    // ADD TO CART
    // =====================================

    const handleAddToCart = () => {

        alert(
            `${product.title} added to cart!`
        )

    }


    return (

        <div className="product-details-page">


            {/* ================================= */}
            {/* TOP BACK BUTTON */}
            {/* ================================= */}

            <div className="container">

                <button
                    className="back-products-btn"
                    onClick={() =>
                        navigate('/dashboard')
                    }
                >

                    <FaArrowLeft />

                    Back to Products

                </button>

            </div>


            {/* ================================= */}
            {/* PRODUCT DETAILS */}
            {/* ================================= */}

            <section className="product-details-section">

                <div className="container">

                    <div className="row g-5">


                        {/* ================================= */}
                        {/* LEFT - IMAGE GALLERY */}
                        {/* ================================= */}

                        <div className="col-lg-6">

                            <div className="product-gallery">


                                {/* Main Image */}

                                <div className="main-product-image">

                                    <img
                                        src={selectedImage}
                                        alt={product.title}
                                    />


                                    {/* Discount */}

                                    <span className="detail-discount">

                                        -
                                        {Math.round(
                                            product.discountPercentage
                                        )}
                                        %

                                    </span>


                                    {/* Wishlist */}

                                    <button
                                        className="wishlist-btn"
                                        onClick={() =>
                                            alert(
                                                'Added to wishlist!'
                                            )
                                        }
                                    >

                                        <FaHeart />

                                    </button>

                                </div>


                                {/* Thumbnail Images */}

                                <div className="product-thumbnails">

                                    {productImages.map(
                                        (image, index) => (

                                            <button
                                                key={index}
                                                className={
                                                    `thumbnail-btn ${
                                                        selectedImage === image
                                                            ? 'active-thumbnail'
                                                            : ''
                                                    }`
                                                }
                                                onClick={() =>
                                                    setSelectedImage(
                                                        image
                                                    )
                                                }
                                            >

                                                <img
                                                    src={image}
                                                    alt={
                                                        `${product.title} ${index + 1}`
                                                    }
                                                />

                                            </button>

                                        )
                                    )}

                                </div>

                            </div>

                        </div>


                        {/* ================================= */}
                        {/* RIGHT - PRODUCT INFORMATION */}
                        {/* ================================= */}

                        <div className="col-lg-6">

                            <div className="product-information">


                                {/* Category */}

                                <span className="detail-category">

                                    {product.category}

                                </span>


                                {/* Title */}

                                <h1 className="detail-title">

                                    {product.title}

                                </h1>


                                {/* Brand */}

                                {product.brand && (

                                    <p className="detail-brand">

                                        Brand:

                                        <strong>
                                            {product.brand}
                                        </strong>

                                    </p>

                                )}


                                {/* Rating */}

                                <div className="detail-rating">

                                    <div className="detail-stars">

                                        {[1, 2, 3, 4, 5].map(
                                            (star) => (

                                                <FaStar
                                                    key={star}
                                                    className={
                                                        star <=
                                                        Math.round(
                                                            product.rating
                                                        )
                                                            ? 'star-filled'
                                                            : 'star-empty'
                                                    }
                                                />

                                            )
                                        )}

                                    </div>

                                    <strong>
                                        {product.rating}
                                    </strong>

                                    <span>
                                        Customer Rating
                                    </span>

                                </div>


                                {/* ================================= */}
                                {/* PRICE */}
                                {/* ================================= */}

                                <div className="detail-price-box">

                                    <span className="detail-current-price">

                                        ${product.price}

                                    </span>


                                    <span className="detail-old-price">

                                        ${originalPrice}

                                    </span>


                                    <span className="detail-discount-text">

                                        {Math.round(
                                            product.discountPercentage
                                        )}
                                        % OFF

                                    </span>

                                </div>


                                {/* Description */}

                                <p className="detail-description">

                                    {product.description}

                                </p>


                                {/* ================================= */}
                                {/* PRODUCT INFORMATION */}
                                {/* ================================= */}

                                <div className="detail-info-grid">


                                    <div>

                                        <span>
                                            Category
                                        </span>

                                        <strong>
                                            {product.category}
                                        </strong>

                                    </div>


                                    <div>

                                        <span>
                                            Stock
                                        </span>

                                        <strong>
                                            {product.stock}
                                        </strong>

                                    </div>


                                    {product.warrantyInformation && (

                                        <div>

                                            <span>
                                                Warranty
                                            </span>

                                            <strong>
                                                {
                                                    product.warrantyInformation
                                                }
                                            </strong>

                                        </div>

                                    )}


                                    {product.shippingInformation && (

                                        <div>

                                            <span>
                                                Shipping
                                            </span>

                                            <strong>
                                                {
                                                    product.shippingInformation
                                                }
                                            </strong>

                                        </div>

                                    )}

                                </div>


                                {/* Availability */}

                                <div className="detail-stock">

                                    <FaCheck />

                                    {product.availabilityStatus ||
                                        'In Stock'}

                                </div>


                                {/* Tags */}

                                {product.tags?.length > 0 && (

                                    <div className="detail-tags">

                                        {product.tags.map(
                                            (tag, index) => (

                                                <span key={index}>

                                                    #{tag}

                                                </span>

                                            )
                                        )}

                                    </div>

                                )}


                                {/* ================================= */}
                                {/* ADD TO CART */}
                                {/* ================================= */}

                                <button
                                    className="detail-cart-btn"
                                    onClick={
                                        handleAddToCart
                                    }
                                >

                                    <FaShoppingCart />

                                    Add To Cart

                                </button>


                                {/* ================================= */}
                                {/* SERVICE FEATURES */}
                                {/* ================================= */}

                                <div className="detail-features">


                                    <div className="detail-feature">

                                        <div className="feature-icon">

                                            <FaTruck />

                                        </div>

                                        <div>

                                            <strong>
                                                Free Delivery
                                            </strong>

                                            <small>
                                                Fast & safe delivery
                                            </small>

                                        </div>

                                    </div>


                                    <div className="detail-feature">

                                        <div className="feature-icon">

                                            <FaShieldAlt />

                                        </div>

                                        <div>

                                            <strong>
                                                Secure Payment
                                            </strong>

                                            <small>
                                                100% secure payment
                                            </small>

                                        </div>

                                    </div>


                                    <div className="detail-feature">

                                        <div className="feature-icon">

                                            <FaUndo />

                                        </div>

                                        <div>

                                            <strong>
                                                Easy Returns
                                            </strong>

                                            <small>
                                                Easy return policy
                                            </small>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================================= */}
            {/* REVIEWS */}
            {/* ================================= */}

            <section className="reviews-section">

                <div className="container">


                    <div className="reviews-heading">

                        <span>
                            CUSTOMER FEEDBACK
                        </span>

                        <h2>
                            Customer
                            <strong> Reviews</strong>
                        </h2>

                        <p>
                            See what customers say about
                            this product
                        </p>

                    </div>


                    <div className="row g-4">

                        {product.reviews?.length > 0 ? (

                            product.reviews.map(
                                (review, index) => (

                                    <div
                                        className="col-md-6 col-lg-4"
                                        key={index}
                                    >

                                        <div className="review-card">


                                            {/* Stars */}

                                            <div className="review-stars">

                                                {[1, 2, 3, 4, 5].map(
                                                    (star) => (

                                                        <FaStar
                                                            key={star}
                                                            className={
                                                                star <=
                                                                review.rating
                                                                    ? 'star-filled'
                                                                    : 'star-empty'
                                                            }
                                                        />

                                                    )
                                                )}

                                            </div>


                                            {/* Review */}

                                            <p className="review-comment">

                                                "{review.comment}"

                                            </p>


                                            {/* User */}

                                            <div className="review-user">

                                                <div className="review-avatar">

                                                    {
                                                        review.reviewerName
                                                            ?.charAt(0)
                                                            .toUpperCase()
                                                    }

                                                </div>


                                                <div>

                                                    <strong>

                                                        {
                                                            review.reviewerName
                                                        }

                                                    </strong>

                                                    <small>
                                                        Verified Customer
                                                    </small>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )

                        ) : (

                            <div className="no-reviews">

                                No reviews available.

                            </div>

                        )}

                    </div>

                </div>

            </section>


        </div>

    )

}


export default ProductDetails