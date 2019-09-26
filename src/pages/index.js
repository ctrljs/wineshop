import React from "react"
import img1 from "../images/wine_2.png"

import Layout from "../components/layout/Layout"
import Hero from "../components//hero/Hero"
import Blog from "../components/home/Blog"
export default () => {
  return (
    <Layout>
      <div className="site-section mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 section-title text-center mb-5">
              <h2 className="d-block">Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, perspiciatis!
              </p>
              <p>
                <a href="#">
                  View All Products
                  <span className="icon-long-arrow-right"></span>
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5 col-md-6">
              <div className="wine_v_1 text-center pb-4">
                <a href="shop-single.html" className="thumbnail d-block mb-4">
                  <img src={img1} alt="Image" className="img-fluid" />
                </a>
                <div>
                  <h3 className="heading mb-1">
                    <a href="#">Trius Cabernet France 2011</a>
                  </h3>
                  <span className="price">$629.00</span>
                </div>

                <div className="wine-actions">
                  <h3 className="heading-2">
                    <a href="#">Trius Cabernet France 2011</a>
                  </h3>
                  <span className="price d-block">$629.00</span>

                  <div className="rating">
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star-o"></span>
                  </div>

                  <a href="#" className="btn add">
                    <span className="icon-shopping-bag mr-3"></span> Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 col-md-6">
              <div className="wine_v_1 text-center pb-4">
                <a href="shop-single.html" className="thumbnail d-block mb-4">
                  <img src={img1} alt="Image" className="img-fluid" />
                </a>
                <div>
                  <h3 className="heading mb-1">
                    <a href="#">Trius Cabernet France 2011</a>
                  </h3>
                  <span className="price">$629.00</span>
                </div>

                <div className="wine-actions">
                  <h3 className="heading-2">
                    <a href="#">Trius Cabernet France 2011</a>
                  </h3>
                  <span className="price d-block">
                    <del>$900.00</del> $629.00
                  </span>

                  <div className="rating">
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star-o"></span>
                  </div>

                  <a href="#" className="btn add">
                    <span className="icon-shopping-bag mr-3"></span> Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 col-md-6">
              <div className="wine_v_1 text-center pb-4">
                <a href="shop-single.html" className="thumbnail d-block mb-4">
                  <img src={img1} alt="Image" className="img-fluid" />
                </a>
                <div>
                  <h3 className="heading mb-1">
                    <a href="#">Trius Cabernet France 2011</a>
                  </h3>
                  <span className="price">$629.00</span>
                </div>

                <div className="wine-actions">
                  <h3 className="heading-2">
                    <a href="#">Trius Cabernet France 2011</a>
                  </h3>
                  <span className="price d-block">
                    <del>$900.00</del> $629.00
                  </span>

                  <div className="rating">
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star-o"></span>
                  </div>

                  <a href="#" className="btn add">
                    <span className="icon-shopping-bag mr-3"></span> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hero />
      <Blog />
    </Layout>
  )
}
