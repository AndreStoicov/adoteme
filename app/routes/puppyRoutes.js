'use strict'

const Puppy = require('../models/puppy').Puppy

module.exports = (app) => {
    app.get('/api/puppy', (req, res) => {
        Puppy.find((err, puppies) => {
            if (err)
                res.send(err)

            res.json(puppies)
        })
    })
}