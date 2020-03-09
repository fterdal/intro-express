const express = require("express")
// const morgan = require("morgan")
// const path = require("path")

const app = express()

app.get("/", (req, res, next) => {
  res.send("<h1>Hello! Welcome to the homepage!</h1>")
})


app.listen(8080, () => {
  console.log("Listening on port 8080")
})
