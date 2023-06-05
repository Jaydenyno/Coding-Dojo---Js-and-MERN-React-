const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./configs/mongoose.config')

const Routes = require('./routes/author.routes')
Routes(app)

app.listen(port, () => console.log(`Welcome! Connection established to port:${port}`))