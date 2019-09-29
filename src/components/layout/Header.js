import React from "react"
import img1 from "../../images/logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <a href="index.html" className="site-logo">
                <img src={img1} alt="Image" className="img-fluid" />
              </a>
            </div>
            <a
              href="#"
              className="mx-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>

        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mx-auto">
                <nav
                  className="site-navigation position-relative text-left"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mx-auto d-none pl-0 d-lg-block border-none">
                    <li>
                      <AniLink
                        fade
                        hex="#ff5733"
                        duration={0.3}
                        to="/"
                        className="nav-link text-left"
                      >
                        Home
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        hex="#ff5733"
                        duration={0.3}
                        to="/about"
                        className="nav-link text-left"
                      >
                        About
                      </AniLink>
                    </li>

                    <li>
                      <AniLink
                        fade
                        hex="#ff5733"
                        duration={0.3}
                        to="/shop"
                        className="nav-link text-left"
                      >
                        Shop
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        hex="#ff5733"
                        duration={0.3}
                        to="/contact"
                        className="nav-link text-left"
                      >
                        Contact
                      </AniLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
