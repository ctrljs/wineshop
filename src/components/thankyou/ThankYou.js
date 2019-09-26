import React from "react"
import { Link } from "gatsby"
const ThankYou = () => {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="icon-check_circle display-3 text-success"></span>
            <h2 class="display-3 text-black font-heading-serif">Thank you!</h2>
            <p class="lead mb-5">You order was successfuly completed.</p>
            <p>
              <Link
                to="/shop"
                class="btn btn-md height-auto px-4 py-3 btn-primary"
              >
                Back to store
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
