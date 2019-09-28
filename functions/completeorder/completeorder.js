const Razorpay = require("razorpay")
const axios = require("axios")

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = (event, context, callback) => {
  try {
    let { razorPayResponse, receipt } = JSON.parse(event.body)

    axios
      .post("https://sharekard.com/auth/local", {
        identifier: "hamrosh",
        password: "12345!",
      })
      .then(response => {
        axios
          .put(
            `https://sharekard.com/wineorders/${receipt}`,
            razorPayResponse,
            {
              headers: { Authorization: `Bearer ${response.data.jwt}` },
            }
          )
          .then(response => {
            console.log("order final details", response)
            callback(null, {
              statusCode: 200,
              body: "Sucess",
            })
          })
          .catch(err => {
            callback(err)
          })
      })
      .catch(error => {
        // Handle error.
        callback(error)
      })
  } catch (err) {
    callback(err)
  }
}
