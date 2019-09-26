import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="social-icons">
              <a href="#">
                <span className="icon-facebook"></span>
              </a>
              <a href="#">
                <span className="icon-twitter"></span>
              </a>
              <a href="#">
                <span className="icon-youtube"></span>
              </a>
              <a href="#">
                <span className="icon-instagram"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <p>
                Copyright &copy; All rights reserved | This template is made
                with{" "}
                <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
