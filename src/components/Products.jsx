import React, { useEffect, useState } from 'react'
import {
    FaSearch,
    FaFilter,
    FaTimes,
    FaBoxOpen
} from 'react-icons/fa'

import Card from './Card'

import './Products.css'


const Products = ({ products, categories }) => {

    const [searchTitle, setSearchTitle] = useState('')

    const [filteredProducts, setFilteredProducts] =
        useState([])

    const [category, setCategory] = useState('')


    // =================================
    // SEARCH + CATEGORY
    // =================================

    useEffect(() => {

        const search = searchTitle
            .trim()
            .toLowerCase()


        const result = products.filter((product) => {

            const searchableText = `

                ${product.title || ''}

                ${product.category || ''}

                ${product.description || ''}

                ${product.brand || ''}

                ${(product.tags || []).join(' ')}

            `.toLowerCase()


            const searchMatch =
                search === '' ||
                searchableText.includes(search)


            const categoryMatch =
                category === '' ||
                product.category === category


            return searchMatch && categoryMatch

        })


        setFilteredProducts(result)

    }, [
        products,
        searchTitle,
        category
    ])


    // =================================
    // SEARCH
    // =================================

    const handleSearch = (e) => {

        setSearchTitle(e.target.value)

    }


    // =================================
    // CATEGORY
    // =================================

    const handleCategory = (e) => {

        setCategory(e.target.value)

    }


    // =================================
    // CLEAR
    // =================================

    const clearFilters = () => {

        setSearchTitle('')

        setCategory('')

    }


    return (

        <section
            className="products-section"
            id="products"
        >

            <div className="container">


                {/* ================================= */}
                {/* HEADING */}
                {/* ================================= */}

                <div className="products-heading">

                    <span>
                        OUR COLLECTION
                    </span>

                    <h2>
                        Explore Our
                        <strong> Products</strong>
                    </h2>

                    <p>
                        Discover amazing products at
                        great prices
                    </p>

                </div>


                {/* ================================= */}
                {/* FILTER */}
                {/* ================================= */}

                <div className="products-filter">


                    {/* Search */}

                    <div className="search-wrapper">

                        <FaSearch />

                        <input
                            type="text"
                            value={searchTitle}
                            onChange={handleSearch}
                            placeholder="Search products..."
                        />

                        {searchTitle && (

                            <button
                                onClick={() =>
                                    setSearchTitle('')
                                }
                            >
                                <FaTimes />
                            </button>

                        )}

                    </div>


                    {/* Category */}

                    <div className="category-wrapper">

                        <FaFilter />

                        <select
                            value={category}
                            onChange={handleCategory}
                        >

                            <option value="">
                                All Categories
                            </option>

                            {categories.map((cat) => (

                                <option
                                    key={cat}
                                    value={cat}
                                >
                                    {cat}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* Clear */}

                    {(searchTitle || category) && (

                        <button
                            className="clear-btn"
                            onClick={clearFilters}
                        >

                            Clear

                        </button>

                    )}

                </div>


                {/* ================================= */}
                {/* RESULT */}
                {/* ================================= */}

                <div className="products-result">

                    <span>

                        Showing

                        <strong>
                            {' '}{filteredProducts.length}{' '}
                        </strong>

                        products

                    </span>

                </div>


                {/* ================================= */}
                {/* PRODUCTS */}
                {/* ================================= */}

                <div className="row g-4">

                    {filteredProducts.length > 0 ? (

                        filteredProducts.map((product) => (

                            <div
                                key={product.id}
                                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                            >

                                <Card
                                    prod={product}
                                />

                            </div>

                        ))

                    ) : (

                        <div className="no-products">

                            <FaBoxOpen />

                            <h3>
                                No Products Found
                            </h3>

                            <p>
                                Try another product name
                                or category.
                            </p>

                            <button
                                onClick={clearFilters}
                            >
                                View All Products
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </section>

    )

}


export default Products