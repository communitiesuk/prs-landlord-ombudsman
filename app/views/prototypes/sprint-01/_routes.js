//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes above the module.exports line

// Multiple

router.post("/multiple/are-you-renting-in-england-or-wales", function (req, res) {
  if (req.session.data["rentingEnglandOrWales"] == "yes") {
    res.redirect("what-do-you-need-help-with");
  } else if (req.session.data["rentingEnglandOrWales"] == "no") {
    res.redirect("cannot-use-service");
  }
});

router.post("/multiple/what-do-you-need-help-with", function (req, res) {
  if (req.session.data["needHelpWith"] == "tenancy") {
    res.redirect("problem-with-tenancy");
  } else if (req.session.data["needHelpWith"] == "maintanence") {
    res.redirect("maintanence-and-repairs");
  }
});

router.post("/multiple/problem-with-tenancy", function (req, res) {
  res.redirect("landlord-legal-issues");
});

router.post("/multiple/maintanence-and-repairs", function (req, res) {
  res.redirect("utility-problem");
});

router.post("/multiple/utility-problem", function (req, res) {
  res.redirect("next-steps");
});

// Single

router.post("/single/are-you-renting-in-england-or-wales", function (req, res) {
  if (req.session.data["rentingEnglandOrWales"] == "yes") {
    res.redirect("what-do-you-need-help-with");
  } else if (req.session.data["rentingEnglandOrWales"] == "no") {
    res.redirect("cannot-use-service");
  }
});

router.post("/single/what-do-you-need-help-with", function (req, res) {
  if (req.session.data["needHelpWith"] == "tenancy") {
    res.redirect("problem-with-tenancy");
  } else if (req.session.data["needHelpWith"] == "maintanence") {
    res.redirect("maintanence-and-repairs");
  }
});

router.post("/single/problem-with-tenancy", function (req, res) {
  res.redirect("landlord-legal-issues");
});

router.post("/single/maintanence-and-repairs", function (req, res) {
  res.redirect("utility-problem");
});

router.post("/single/utility-problem", function (req, res) {
  res.redirect("next-steps");
});

router.post("/single/landlord-legal-issues", function (req, res) {
  res.redirect("triage-results");
});

router.post("/single/landlord-legal-issues", function (req, res) {
  res.redirect("triage-results");
});

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
