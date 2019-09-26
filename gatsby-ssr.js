import React from "react"
import MyProvider from "./src/components/cart/MyProvider"

export const wrapRootElement = ({ element }) => (
  <MyProvider>{element}</MyProvider>
)
