const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./configs/mongoose.config')

// Option1
const Routes = require('./routes/song.routes.js')
Routes(app)
// // Option2
// require('./routes/song.routes')(app)

app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port: ${port}`))