//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes above the module.exports line

router.post("/", function (req, res) {
  res.redirect("how-are-you-feeling");
});

router.post("/eng-wal-private-renting", function (req, res) {
  if (req.session.data["ans"] == "Yes") {
    if (req.cookies.chatbot) {
      res.redirect("chatbot");
    } else {
      res.redirect("what-do-you-need-help-with");
    }
  } else if (req.session.data["ans"] == "No") {
    res.redirect("not-private-renting-within-eng-or-wal");
  }
});

router.post("/what-do-you-need-help-with", function (req, res) {
  if (req.session.data["help"] == "con") {
    res.redirect("contractual");
  } else if (req.session.data["help"] == "main") {
    res.redirect("maintanence-and-repairs");
  }
});

router.post("/chatbot", function (req, res) {
  res.redirect("answer");
});

module.exports = router;
