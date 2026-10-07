import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FaShoppingCart,
    FaStar,
    FaEye
} from 'react-icons/fa'

import './Card.css'


const Card = ({ prod }) => {

    const [readMore, setReadMore] = useState(false)


    const description = prod.description || ''

    const shortDescription =
        description.length > 90
            ? description.slice(0, 90) + '...'
            : description


    return (

        <div className="shop-card">


            {/* ========================= */}
            {/* PRODUCT IMAGE */}
            {/* ========================= */}

            <div className="card-image-wrapper">

                <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="card-product-image"
                />


                {/* Discount */}

                <span className="card-discount">

                    {Math.round(prod.discountPercentage)}% OFF

                </span>


                {/* Stock */}

                <span className="card-stock">

                    {prod.availabilityStatus || 'In Stock'}

                </span>

            </div>


            {/* ========================= */}
            {/* CARD CONTENT */}
            {/* ========================= */}

            <div className="shop-card-body">


                {/* Category */}

                <span className="card-category">

                    {prod.category}

                </span>


                {/* Title */}

                <h3 className="card-title">

                    {prod.title}

                </h3>


                {/* Description */}

                <p className="card-description">

                    {readMore
                        ? description
                        : shortDescription
                    }

                </p>


                {/* Read More */}

                {description.length > 90 && (

                    <button
                        className="read-more-btn"
                        onClick={() =>
                            setReadMore(!readMore)
                        }
                    >

                        {readMore
                            ? 'Read Less'
                            : 'Read More'
                        }

                    </button>

                )}


                {/* ========================= */}
                {/* RATING */}
                {/* ========================= */}

                <div className="card-rating">

                    <div className="stars">

                        {[1, 2, 3, 4, 5].map((star) => (

                            <FaStar
                                key={star}
                                className={
                                    star <= Math.round(prod.rating)
                                        ? 'star active'
                                        : 'star'
                                }
                            />

                        ))}

                    </div>


                    <span>
                        {prod.rating}
                    </span>

                </div>


                {/* ========================= */}
                {/* PRICE */}
                {/* ========================= */}

                <div className="card-price-row">

                    <span className="card-price">

                        ${prod.price}

                    </span>


                    <span className="card-old-price">

                        $
                        {(
                            prod.price /
                            (1 - prod.discountPercentage / 100)
                        ).toFixed(2)}

                    </span>

                </div>


                {/* ========================= */}
                {/* BUTTONS */}
                {/* ========================= */}

                <div className="card-buttons">


                    <button
                        className="card-cart-btn"
                        onClick={() =>
                            alert(`${prod.title} added to cart!`)
                        }
                    >

                        <FaShoppingCart />

                        Add To Cart

                    </button>


                    <Link
                        to={`/product-details/${prod.id}`}
                        className="card-details-btn"
                    >

                        <FaEye />

                        View Details

                    </Link>

                </div>

            </div>

        </div>

    )

}


export default Card