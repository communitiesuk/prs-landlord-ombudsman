//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes above the module.exports line

router.post('/', function (req, res) {
    res.redirect('how-are-you-feeling');
  });
  

module.exports = router