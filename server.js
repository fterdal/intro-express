const express = require("express")
const morgan = require("morgan")
const path = require("path")

const app = express()

// app.use((req, res, next) => {
//   console.log(req.method, req.path)
//   next()
// })

app.use(morgan("dev"))

console.log("\n\n")
console.log(__dirname)
console.log("\n\n")

app.use(express.static(path.join(__dirname, "images")))
// kitty1.png
// app.get("/kitty1.png", (req, res, next) => {
//   console.log("Retrieving a cat!");
//   res.sendFile("/images/kitty1.png");
// });

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

app.get("/kitties", (req, res, next) => {
  res.send(`
  <div>
    <img src="/kitty1.png">
    <img src="/kitty2.png">
    <img src="/kitty3.png">
  </div>
  `)
})

app.get("/kitties/:kittyId", (req, res, next) => {
  console.log(req.params)
  res.send(`<img src="/kitty${req.params.kittyId}.png">`);
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
