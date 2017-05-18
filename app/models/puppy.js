'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Promise = require('bluebird')

const puppySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    default: ''
  }
})

const Puppy = mongoose.model('Puppy', puppySchema)
Promise.promisifyAll(Puppy)
Promise.promisifyAll(Puppy.prototype)

exports.Puppy = Puppy