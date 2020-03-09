const express = require("express")
const morgan = require("morgan")
const path = require("path")

const app = express()
app.use(morgan("dev"))

app.use((req, res, next) => {
  console.log("custom logger\n", req.method, req.path)
  next()
})

app.use(express.static(path.join(__dirname, "images")))

app.get("/", (req, res, next) => {
  res.send("<h1>Hello! Welcome to the homepage!</h1>")
})

app.get("/kitty/:id", (req, res, next) => {
  const id = req.params.id
  res.send(`
    <div>
      <h2>Kitty ${id}</h2>
      <img src="/kitty${id}.png">
    </div>
  `)
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
