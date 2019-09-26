import React, { useContext } from "react"

import CartItem from "./CartItem"
import { Link } from "gatsby"
import { CartCon } from "./MyProvider"
const MainCart = () => {
  const { cartItems, total } = useContext(CartCon)

  return (
    <>
      <div className="site-section pb-0">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-7 section-title text-center mb-5">
              <h2 className="d-block">Cart </h2>
            </div>
          </div>
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(cartItem => {
                      console.log(cartItem)
                      return (
                        <CartItem key={cartItem.item_id} cartItem={cartItem} />
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="site-section pt-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                {/*  <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-md btn-block">
                    Update Cart
                  </button>
                </div> */}
                <div className="col-md-6">
                  <Link
                    to="./shop"
                    className="btn btn-outline-primary btn-md btn-block"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0"></div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-md px-4">
                    Apply Coupon
                  </button>
                </div>
              </div> */}
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  {/*                   <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div> */}
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">Rs {total}</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <Link
                        to="/checkout"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Proceed To Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCart
