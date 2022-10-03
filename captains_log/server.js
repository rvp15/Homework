//Load express
const express = require('express')
const methodOverride = require('method-override')
//create app
const app = express()
//mongo config function
const mongoConfig = require('./config')
//bodyparser
const bodyParser = require('body-parser')
//.env to connect MongoDB
require('dotenv').config()
//port
const port = process.env.PORT

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended:false}))
app.use(express.static("public")) // used to serve static files like css files 
app.use(express.json()) // it parses incoming requests with JSON payloads and is based on body-parser
app.use(bodyParser.json())
app.use(methodOverride("_method"))

//Routes
const logRoutes = require('./routes/logroute')
//Middleware
app.use('/log', logRoutes)



// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()