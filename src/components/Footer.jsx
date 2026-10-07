// import React from 'react'
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaTwitter,
//     FaYoutube,
//     FaArrowRight,
//     FaCreditCard,
//     FaTruck,
//     FaHeadset,
//     FaShieldAlt
// } from 'react-icons/fa'

// import './Footer.css'


// const Footer = () => {

//     const handleSubscribe = (e) => {

//         e.preventDefault()

//         alert('Thank you for subscribing!')

//     }


//     return (

//         <footer className="shopzone-footer">


//             {/* ================================= */}
//             {/* TOP FEATURES */}
//             {/* ================================= */}

//             <div className="footer-features">

//                 <div className="container">

//                     <div className="row g-3">


//                         <div className="col-6 col-lg-3">

//                             <div className="footer-feature">

//                                 <div className="footer-feature-icon">
//                                     <FaTruck />
//                                 </div>

//                                 <div>
//                                     <h6>
//                                         Fast Delivery
//                                     </h6>

//                                     <p>
//                                         Quick & safe delivery
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>


//                         <div className="col-6 col-lg-3">

//                             <div className="footer-feature">

//                                 <div className="footer-feature-icon">
//                                     <FaShieldAlt />
//                                 </div>

//                                 <div>
//                                     <h6>
//                                         Secure Shopping
//                                     </h6>

//                                     <p>
//                                         100% secure checkout
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>


//                         <div className="col-6 col-lg-3">

//                             <div className="footer-feature">

//                                 <div className="footer-feature-icon">
//                                     <FaCreditCard />
//                                 </div>

//                                 <div>
//                                     <h6>
//                                         Easy Payment
//                                     </h6>

//                                     <p>
//                                         Multiple payment options
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>


//                         <div className="col-6 col-lg-3">

//                             <div className="footer-feature">

//                                 <div className="footer-feature-icon">
//                                     <FaHeadset />
//                                 </div>

//                                 <div>
//                                     <h6>
//                                         24/7 Support
//                                     </h6>

//                                     <p>
//                                         We are here to help
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>


//                     </div>

//                 </div>

//             </div>


//             {/* ================================= */}
//             {/* MAIN FOOTER */}
//             {/* ================================= */}

//             <div className="footer-main">

//                 <div className="container">

//                     <div className="row g-5">


//                         {/* BRAND */}

//                         <div className="col-lg-4">

//                             <div className="footer-brand">

//                                 <span className="footer-logo-icon">
//                                     🛍️
//                                 </span>

//                                 Shop
//                                 <span>Zone</span>

//                             </div>


//                             <p className="footer-about">

//                                 Your one-stop destination for
//                                 quality products, amazing deals
//                                 and a smooth shopping experience.

//                             </p>


//                             {/* SOCIAL MEDIA */}

//                             <div className="footer-social">

//                                 <a
//                                     href="#"
//                                     onClick={(e) =>
//                                         e.preventDefault()
//                                     }
//                                 >
//                                     <FaFacebookF />
//                                 </a>

//                                 <a
//                                     href="#"
//                                     onClick={(e) =>
//                                         e.preventDefault()
//                                     }
//                                 >
//                                     <FaInstagram />
//                                 </a>

//                                 <a
//                                     href="#"
//                                     onClick={(e) =>
//                                         e.preventDefault()
//                                     }
//                                 >
//                                     <FaTwitter />
//                                 </a>

//                                 <a
//                                     href="#"
//                                     onClick={(e) =>
//                                         e.preventDefault()
//                                     }
//                                 >
//                                     <FaYoutube />
//                                 </a>

//                             </div>

//                         </div>


//                         {/* QUICK LINKS */}

//                         <div className="col-6 col-lg-2">

//                             <h5 className="footer-title">
//                                 Quick Links
//                             </h5>

//                             <ul className="footer-links">

//                                 <li>
//                                     <a href="/dashboard">
//                                         Home
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#products">
//                                         Products
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#products">
//                                         Categories
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#products">
//                                         Best Deals
//                                     </a>
//                                 </li>

//                             </ul>

//                         </div>


//                         {/* CUSTOMER SERVICE */}

//                         <div className="col-6 col-lg-2">

//                             <h5 className="footer-title">
//                                 Help
//                             </h5>

//                             <ul className="footer-links">

//                                 <li>
//                                     <a href="#">
//                                         My Account
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         Shopping Cart
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         Order Tracking
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         Returns
//                                     </a>
//                                 </li>

//                             </ul>

//                         </div>


//                         {/* NEWSLETTER */}

//                         <div className="col-lg-4">

//                             <h5 className="footer-title">
//                                 Stay Updated
//                             </h5>


//                             <p className="newsletter-text">

//                                 Subscribe to get the latest
//                                 products, offers and updates.

//                             </p>


//                             <form
//                                 className="newsletter-form"
//                                 onSubmit={handleSubscribe}
//                             >

//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     required
//                                 />

//                                 <button type="submit">

//                                     <FaArrowRight />

//                                 </button>

//                             </form>


//                             <p className="newsletter-small">

//                                 🔒 We respect your privacy.

//                             </p>

//                         </div>


//                     </div>

//                 </div>

//             </div>


//             {/* ================================= */}
//             {/* BOTTOM FOOTER */}
//             {/* ================================= */}

//             <div className="footer-bottom">

//                 <div className="container">

//                     <div className="footer-bottom-content">

//                         <p>
//                             © {new Date().getFullYear()}
//                             {' '}
//                             <strong>ShopZone</strong>.
//                             All Rights Reserved.
//                         </p>


//                         <div className="footer-bottom-links">

//                             <span>
//                                 Privacy Policy
//                             </span>

//                             <span>
//                                 Terms & Conditions
//                             </span>

//                         </div>

//                     </div>

//                 </div>

//             </div>


//         </footer>

//     )

// }



// export default Footer








import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">

      {/* Main Footer */}
      <div className="container py-5">

        <div className="row">

          {/* Brand */}
          <div className="col-lg-4 col-md-6 mb-4">

            <h2 className="fw-bold text-warning">
              ShopZone
            </h2>

            <p className="text-secondary mt-3">
              Discover amazing products at the best prices.
              Shop your favorite products from the comfort
              of your home.
            </p>

            <div className="d-flex gap-2 mt-4">

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-twitter"></i>
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-linkedin"></i>
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h5 className="fw-bold mb-4">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Products
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  About Us
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5 className="fw-bold mb-4">
              Customer Service
            </h5>

            <ul className="list-unstyled">

              <li className="mb-3">
                <i className="bi bi-truck text-warning me-2"></i>
                Fast Delivery
              </li>

              <li className="mb-3">
                <i className="bi bi-arrow-repeat text-warning me-2"></i>
                Easy Returns
              </li>

              <li className="mb-3">
                <i className="bi bi-shield-check text-warning me-2"></i>
                Secure Payment
              </li>

              <li className="mb-3">
                <i className="bi bi-headset text-warning me-2"></i>
                24/7 Support
              </li>

            </ul>

          </div>


          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5 className="fw-bold mb-4">
              Contact Us
            </h5>

            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>
              Pune, Maharashtra, India
            </p>

            <p className="text-secondary">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              support@shopzone.com
            </p>

            <p className="text-secondary">
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              +91 98765 43210
            </p>

          </div>

        </div>

      </div>


      {/* Newsletter */}
      <div className="border-top border-secondary">

        <div className="container py-4">

          <div className="row align-items-center">

            <div className="col-md-6 mb-3 mb-md-0">

              <h5 className="fw-bold">
                Subscribe to our newsletter 📩
              </h5>

              <p className="text-secondary mb-0">
                Get the latest offers and updates.
              </p>

            </div>

            <div className="col-md-6">

              <div className="input-group">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />

                <button className="btn btn-warning fw-bold">
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="bg-black">

        <div className="container py-3">

          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">

              <small className="text-secondary">
                © 2026 ShopZone. All Rights Reserved.
              </small>

            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">

              <small>
                <a href="#" className="text-secondary text-decoration-none me-3">
                  Privacy Policy
                </a>

                <a href="#" className="text-secondary text-decoration-none">
                  Terms & Conditions
                </a>
              </small>

            </div>

          </div>

        </div>n

      </div>

    </footer>
  )
}

export default Footer











