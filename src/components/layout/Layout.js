import React from "react"
import "../../css/bootstrap.min.css"
import "../../css/style.css"
import "../../fonts/icomoon/style.css"
import "../../fonts/flaticon/font/flaticon.css"
import "../../css/aos.css"

import Header from "./Header"
import Footer from "./Footer"
import MyProvider from "../cart/MyProvider"

const Layout = ({ children }) => {
  return (
    <div className="site-wrap">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
