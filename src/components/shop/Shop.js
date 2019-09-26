import React from "react"
import ShopItem from "./ShopItem"
import MainCart from "../cart/MainCart"

const Shop = props => {
  return (
    <>
      <div className="site-section mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 section-title text-center mb-5">
              <h2 className="d-block">Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, perspiciatis!
              </p>
            </div>
          </div>

          <div className="row">
            {props.allWines.map(({ node }, i) => {
              return <ShopItem key={node.id} item={node} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
