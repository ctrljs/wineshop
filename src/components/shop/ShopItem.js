import React, { useContext } from "react"
import img1 from "../../images/wine_2.png"
import Image from "gatsby-image"
import { navigate } from "gatsby"
import { CartCon } from "../cart/MyProvider"
const ShopItem = ({ item }) => {
  const { addItem } = useContext(CartCon)

  return (
    <div className="col-lg-4 mb-5 col-md-6">
      <div className="wine_v_1 text-center pb-4">
        <a href="shop-single.html" className="thumbnail d-block mb-4">
          <Image
            fluid={item.wine_image.childImageSharp.fluid}
            alt="Image"
            className="img-fluid"
          />
        </a>
        <div>
          <h3 className="heading mb-1">
            <a href="#">{item.wine_name}</a>
          </h3>
          <span className="price">${item.price}</span>
        </div>

        <div className="wine-actions">
          <h3 className="heading-2">
            <a href="#">{item.wine_name}</a>
          </h3>
          <span className="price d-block">${item.price}</span>
          {/* 
          <div className="rating">
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star-o"></span>
          </div> */}

          <a
            onClick={e => {
              e.preventDefault()
              let x = {}
              x.item_id = item.id
              x.item_name = item.wine_name
              x.item_price = item.price
              addItem(x)
              navigate("/cart")
            }}
            className="btn add"
          >
            <span className="icon-shopping-bag mr-3"></span> Add to Cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShopItem
