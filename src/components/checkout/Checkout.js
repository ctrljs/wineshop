import React, { useContext, useEffect, useReducer } from "react"
import axios from "axios"
import { CartCon } from "../cart/MyProvider"
import { navigate } from "gatsby"
const Checkout = () => {
  const { cartItems, total, clearCart } = useContext(CartCon)
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      state: "",
      pincode: "",
      emailAddress: "",
      mobileNumber: "",
      specialNotes: "",
    }
  )
  const handleChange = evt => {
    const name = evt.target.name
    const newValue = evt.target.value
    setUserInput({ [name]: newValue })
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  function paymentHandler() {
    const params = new URLSearchParams()
    params.append("cartItems", JSON.stringify(cartItems))
    params.append("shippingInfo", JSON.stringify(userInput))
    params.append("total_amount", total)
    /*   params.append("item_id", itemId)
    params.append("description", description) */

    axios({
      method: "post",
      url: "./.netlify/functions/hello-world",
      data: params,
    })
      .then(order_res => {
        // Handle success.
        console.log("Order Data", order_res)
        var options = {
          key: "rzp_test_F8GyQgYJwEzutm", // Enter the Key ID generated from the Dashboard
          /*   amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
  currency: 'INR', */
          name: "Wines Co.",
          description: "Payment from Client",
          image: "/logo.png",
          order_id: order_res.data.id, //This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
          handler: function(response) {
            console.log("Gateway response", response)

            const param_complete = new URLSearchParams()
            param_complete.append("razorPayResponse", JSON.stringify(response))
            param_complete.append("receipt", order_res.data.receipt)
            axios({
              method: "post",
              url: `http://localhost:3000/completeorder`,
              data: param_complete,
            })
              .then(res => {
                console.log("response from complete order", res)
                clearCart()
                navigate("/thankyou")
              })
              .catch(err => {})
          },
          prefill: {
            name: userInput.firstName + " " + userInput.lastName,
            email: userInput.emailAddress,
            contact: userInput.mobileNumber,
          },
          notes: {
            address: "note value",
          },
          theme: {
            color: "#F37254",
          },
        }

        let rzp = new window.Razorpay(options)
        rzp.open()
      })
      .catch(err => {
        console.log("Error", err)
      })
  }

  function paymentHandler2() {
    const params = new URLSearchParams()
    params.append("first_name", "Hamrosh")
    params.append("first_name", "Vachakkal")

    /*   params.append("item_id", itemId)
    params.append("description", description) */

    axios({
      method: "post",
      url: "./.netlify/functions/test",
      data: params,
    })
      .then(order_res => {
        console.log("response from function", order_res)
      })
      .catch(err => {})
  }

  return (
    <div className="site-section">
      <div className="container">
        {/*   <div className="row mb-5">
          <div className="col-md-12">
            <div className="bg-light rounded p-3">
              <p className="mb-0">
                Returning customer?{" "}
                <a href="#" className="d-inline-block">
                  Click here
                </a>{" "}
                to login
              </p>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black font-heading-serif">
              Billing Details
            </h2>
            <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                <div className="col-md-6">
                  <label for="c_fname" className="text-black">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userInput.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <label for="c_lname" className="text-black">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userInput.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label for="c_address" className="text-black">
                    Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={userInput.address1}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Street Address"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="address2"
                  value={userInput.address2}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>

              <div className="form-group row">
                <div className="col-md-6">
                  <label for="c_state_country" className="text-black">
                    City / State <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={userInput.state}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="City and State"
                  />
                </div>
                <div className="col-md-6">
                  <label for="c_postal_zip" className="text-black">
                    Postal / Zip <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={userInput.pincode}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Pincode"
                  />
                </div>
              </div>

              <div className="form-group row mb-5">
                <div className="col-md-6">
                  <label for="c_email_address" className="text-black">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="emailAddress"
                    value={userInput.emailAddress}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <label for="c_phone" className="text-black">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={userInput.mobileNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="c_order_notes" className="text-black">
                  Order Notes
                </label>

                <textarea
                  name="specialNotes"
                  value={userInput.specialNotes}
                  onChange={handleChange}
                  cols="30"
                  rows="5"
                  className="form-control"
                  placeholder="Write your notes here..."
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/*   <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black font-heading-serif">
                  Coupon Code
                </h2>
                <div className="p-3 p-lg-5 border">
                  <label for="c_code" className="text-black mb-3">
                    Enter your coupon code if you have one
                  </label>
                  <div className="input-group w-75">
                    <input
                      type="text"
                      className="form-control"
                      id="c_code"
                      placeholder="Coupon Code"
                      aria-label="Coupon Code"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary btn-sm rounded px-4"
                        type="button"
                        id="button-addon2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 */}
            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black font-heading-serif">
                  Your Order
                </h2>
                <div className="p-3 p-lg-5 border">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                      <th>Product</th>
                      <th>Total</th>
                    </thead>
                    <tbody>
                      {cartItems.map(cartItem => {
                        let total = cartItem.item_price * cartItem.quantity
                        return (
                          <tr>
                            <td>
                              {cartItem.item_name}
                              <strong className="mx-2">x</strong>
                              {cartItem.quantity}
                            </td>
                            <td>Rs {total}</td>
                          </tr>
                        )
                      })}

                      <tr>
                        <td className="text-black font-weight-bold">
                          <strong>Order Total</strong>
                        </td>
                        <td className="text-black font-weight-bold">
                          <strong>Rs {total}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="form-group">
                    <button
                      onClick={paymentHandler}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Place Order
                    </button>

                    <button
                      onClick={paymentHandler2}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Check Function
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
