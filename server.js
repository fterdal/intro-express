const express = require("express")
// const morgan = require("morgan")
// const path = require("path")

const app = express()

app.get("/", (req, res, next) => {
  res.send(`
    <div>
      <a href="/sandwiches">Go To Sandwiches</a>
      <h1>Hello! Welcome to the homepage!</h1>
    </div>
  `)
})

app.get("/sandwiches", (req, res, next) => {
  res.send("<h1>Have some tasty sandwiches! 🍔 🥪</h1>")
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
