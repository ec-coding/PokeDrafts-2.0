const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const methodOverride = require('method-override')
// Passport handles authentication and has strategies
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const {MongoClient, ObjectId} = require('mongodb')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const cors = require ('cors');
const mainRoutes = require('./routes/main')
const authRoutes = require('./routes/auth')
const decksRoutes = require('./routes/decks')

// Load Config
dotenv.config({ path: './config/config.env' })

//If we don't have this line of code, any of the env files that we attempt to use will not run
require('dotenv').config()

// Passport config
require('./config/passport')(passport)

connectDB()

app.use(cors())

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let port = process.env.PORT || 7000; 

//How do I put this in an env file?
// let db,
//     dbConnectionStr = "mongodb+srv://Zolere:Yggdrasil99!!@deck-builder.vtmbkox.mongodb.net/?retryWrites=true&w=majority",
//     dbName = 'deck-builder'

// Method override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  }))

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({ mongoUrl: process.env.MONGO_URI })
    // store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// // Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// Set global var
app.use(function (req, res, next) {
    // res.locals.user = req.user || null
    res.locals.user = req.user || {id: "636719291b683e06dddaa82c"}
    req.user = {id: "636719291b683e06dddaa82c"}
    next()
})

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', mainRoutes)
app.use('/auth', authRoutes)
app.use('/decks', decksRoutes)

// Port Info
const PORT = process.env.PORT || 7000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)