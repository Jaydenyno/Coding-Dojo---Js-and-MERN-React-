const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./configs/mongoose.config')

const Routes = require('./routes/product.routes')
Routes(app)

app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port: ${port}`))