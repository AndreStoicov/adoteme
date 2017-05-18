'use strict'

// modules =================================================
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// configuration ===========================================

// config files
const db = require('./config/db')

// set our port
const Port = process.env.PORT || 8080

mongoose.connect('mongodb://localhost:27017/adoteme-dev')

// parse application/json 
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'))

// routes ==================================================
require('./app/routes/puppyRoutes')(app) // configure our routes

app.listen(Port, () => {
    console.log('Listening on Port: ' + Port)
})

app.get('*', (req, res) => {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
})