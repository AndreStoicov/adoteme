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
  },
  type: {
    type: String,
    required: true,
    default: ''
  },
  breed: {
    type: String,
    required: true,
    default: ''
  },
  furType: {
    type: String,
    required: true,
    default: ''
  },
  furColor: {
    type: String,
    required: true,
    default: ''
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
  needHome: {
    type: Boolean,
    required: true,
    default: ''
  },
  tags: {
    type: [String],
    required: false,
    default: ''
  }
})

const Puppy = mongoose.model('Puppy', puppySchema)
Promise.promisifyAll(Puppy)
Promise.promisifyAll(Puppy.prototype)

exports.Puppy = Puppy