import React, { useContext } from "react"
import img1 from "../../images/wine_1.png"
import { CartCon } from "./MyProvider"
const CartItem = ({ cartItem }) => {
  const { removeItem, addQuantity, decreaseQuantity } = useContext(CartCon)
  return (
    <tr>
      <td className="product-thumbnail">
        <img src={img1} alt="Image" className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 cart-product-title text-black">
          {cartItem.item_name}
        </h2>
      </td>
      <td>Rs {cartItem.item_price} </td>
      <td>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary js-btn-minus"
              type="button"
              onClick={e => {
                e.preventDefault()
                decreaseQuantity(cartItem.item_id)
              }}
            >
              &minus;
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center  border mr-0"
            placeholder=""
            value={cartItem.quantity}
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary js-btn-plus"
              type="button"
              onClick={e => {
                e.preventDefault()
                addQuantity(cartItem.item_id)
              }}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>Rs {cartItem.item_price * cartItem.quantity}</td>
      <td>
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            removeItem(cartItem.item_id)
          }}
          className="btn btn-primary height-auto btn-sm"
        >
          X
        </a>
      </td>
    </tr>
  )
}

export default CartItem
