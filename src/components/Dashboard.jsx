
import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Products from './Products'
import Footer from './Footer'

const Dashboard = ({ loggedUser, setLoggedUser }) => {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  async function fetchData() {

    try {

      const response = await fetch(
        'https://dummyjson.com/products'
      )

      const data = await response.json()

      setProducts(data.products)

    } catch (error) {

      console.log('Error fetching products:', error)

    }

  }


  useEffect(() => {

    fetchData()

  }, [])


  useEffect(() => {

    const cats = [
      ...new Set(
        products.map((product) => product.category)
      )
    ]

    setCategories(cats)

  }, [products])


  return (
    <>

      <Navbar
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
      />

      <HeroSection />

      <Products
        products={products}
        categories={categories}
      />

      <Footer />

    </>
  )
}

export default Dashboard