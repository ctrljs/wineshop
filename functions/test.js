const axios = require("axios")

exports.handler = function(event, context, callback) {
  console.log(event.body)
  const parsedBody = JSON.parse(event.body)
  console.log(parsedBody)
  axios
    .post("https://en3iv2o5kbd2u.x.pipedream.net", {
      first_name: parsedBody.first_name,
      last_name: parsedBody.last_name,
    })
    .then(reponse => {
      console.log(reponse)
      callback(null, {
        statusCode: 200,
        body: "Hello, World",
      })
    })
    .catch(err => {
      console.log(err)
      callback(new Error("Something wrong"))
    })
}
