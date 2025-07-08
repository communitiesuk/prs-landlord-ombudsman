//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes above the module.exports line

// Chatbot

router.post(
  "/chatbot/are-you-renting-in-england-or-wales",
  function (req, res) {
    if (req.session.data["renting-in-england-or-wales"] == "Yes") {
      res.redirect("ask");
    } else if (req.session.data["renting-in-england-or-wales"] == "No") {
      res.redirect("cannot-use-service");
    }
  }
);

router.post("/chatbot/ask", function (req, res) {
  res.redirect("answer");
});

module.exports = router;
