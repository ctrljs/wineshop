// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const Razorpay = require("razorpay")
const axios = require("axios")

exports.handler = (event, context, callback) => {
  try {
    console.log("data from link", event.body)

    callback(null, {
      statusCode: 200,
      body: "Hello, World",
    })
    return

    let shippingInfo = event.body.shippingInfo
    /*  let cartItems = JSON.parse(event.body.cartItems)
    let totalamount = event.body.total_amount
    let paisa_amount = totalamount * 100 */
    console.log("data from link", shippingInfo)
    axios
      .post("https://sharekard.com/auth/local", {
        identifier: "hamrosh",
        password: "12345!",
      })
      .then(response => {
        axios
          .post(
            "https://sharekard.com/wineorders",
            {
              first_name: shippingInfo.firstName,
              last_name: shippingInfo.lastName,
              address1: shippingInfo.address1,
              address2: shippingInfo.address2,
              state: shippingInfo.state,
              pincode: shippingInfo.pincode,
              email_address: shippingInfo.emailAddress,
              mobile_number: shippingInfo.mobileNumber,
              special_notes: shippingInfo.specialNotes,
              order_items: cartItems,
            },
            {
              headers: { Authorization: `Bearer ${response.data.jwt}` },
            }
          )
          .then(response => {
            console.log(response.data.id)

            let rzp = new Razorpay({
              key_id: "rzp_test_F8GyQgYJwEzutm", // your `KEY_ID`
              key_secret: "512SwRPNeY9lnnD88udN0uVU", // your `KEY_SECRET`
            })

            var options = {
              amount: paisa_amount,
              currency: "INR",
              receipt: response.data.id,
              payment_capture: "0",
            }
            rzp.orders.create(options, function(err, order) {
              console.log(order)
              res.send(order)
            })
          })
          .catch(err => {
            console.log("Error", err)
          })
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error)
      })
  } catch (err) {
    callback(err)
  }
}
