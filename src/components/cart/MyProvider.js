import React, { useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"

export const CartCon = React.createContext()

/**
 * Manages the shopping cart, which is persisted in local storage.
 * The cart and related methods are shared through context.
 */
const MyProvider = ({ children }) => {
  const [mode, setMode] = useState(false)

  const [cartItems, setCartItems] = useState([])
  /*  const [cartItems, setCartItems] = useState(() => {
    let localCart
    try {
      localCart = JSON.parse(localStorage.getItem("wine_cart"))
    } catch (err) {
      console.error(err.message)
    }
    if (!localCart || !Array.isArray(localCart)) return []
    return localCart
  }) */

  /*   useEffect(() => {
    try {
      localStorage.setItem("wine_cart", JSON.stringify(cartItems))
    } catch (err) {
      console.error(err)
    }
  }, cartItems) */

  function addItem(itm) {
    const currentItem = cartItems.find(item => item.item_id === itm.item_id)

    const currentQuantity = currentItem ? currentItem.quantity : 0
    itm.quantity = currentQuantity + 1

    setCartItems(state => {
      const newState = [...state]
      const index = cartItems.findIndex(item => item.item_id === itm.item_id)
      if (index !== -1) {
        newState[index] = itm
      } else {
        newState.push(itm)
      }
      return newState
    })
  }

  function toggle(force) {
    setMode(prev => !prev)
  }

  function removeItem(id) {
    setCartItems(state => {
      console.log(id)
      console.log(state.filter(item => item.item_id !== id))
      return state.filter(item => item.item_id !== id)
    })
  }

  function addQuantity(id) {
    setCartItems(state => {
      const newState = [...state]
      const index = cartItems.findIndex(item => item.item_id === id)
      if (index !== -1) {
        newState[index].quantity = newState[index].quantity + 1
      }
      return newState
    })
  }

  function decreaseQuantity(id) {
    setCartItems(state => {
      const newState = [...state]
      const index = cartItems.findIndex(item => item.item_id === id)
      if (index !== -1) {
        if (newState[index].quantity > 1) {
          newState[index].quantity = newState[index].quantity - 1
        }
      }
      return newState
    })
  }

  const count = cartItems.reduce(function(prev, cur) {
    return prev + cur.quantity
  }, 0)

  const total = cartItems.reduce(function(prev, cur) {
    return prev + cur.item_price * cur.quantity
  }, 0)

  function clearCart() {
    localStorage.removeItem("wine_cart")
    setCartItems(state => {
      return []
    })
  }

  // push to local storage

  const ctx = {
    toggle,
    mode,
    addItem,
    removeItem,
    cartItems,
    count,
    total,
    addQuantity,
    decreaseQuantity,
    clearCart,
  }

  return <CartCon.Provider value={{ ...ctx }}>{children}</CartCon.Provider>
}

MyProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MyProvider
