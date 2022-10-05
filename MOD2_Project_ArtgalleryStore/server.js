const express = require('express')
const app = express()
const multer = require('multer')
//mongo config function
const mongoConfig = require('./config')
require('dotenv').config()
const port = process.env.PORT
console.log(port)
//bodyparser
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//MiddleWare
app.use(express.urlencoded({extended:false}))
app.use(express.static("public")) // used to serve static files like css files 
app.use(express.json()) // it parses incoming requests with JSON payloads and is based on body-parser
app.use(bodyParser.json())
app.use(methodOverride("_method"))

//Routes
const artRoutes = require('./routes/artroute')
// //Middleware
app.use('/arts', artRoutes)
// app.use('/static', express.static('public'))

// Connect to DB
mongoConfig()

// Listen to port
app.listen(port, () => console.log(`Listening on port: ${port}`))

