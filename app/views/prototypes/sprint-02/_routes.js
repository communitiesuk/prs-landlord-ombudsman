//const express = require('express')
//const router = new express.Router()
const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes above the module.exports line

// LLM
router.post("/llm/are-you-renting-in-england-or-wales", function (req, res) {
  if (req.session.data["rentingEnglandOrWales"] == "yes") {
    res.redirect("what-do-you-need-help-with");
  } else if (req.session.data["rentingEnglandOrWales"] == "no") {
    res.redirect("cannot-use-service");
  }
});

router.post("/llm/what-do-you-need-help-with", function (req, res) {
  res.redirect("have-you-spoken-to-anyone");
});

router.post("/llm/have-you-spoken-to-anyone", function (req, res) {
  if (req.session.data["haveYouSpokenToAnyone"] == "no") {
    res.redirect("more-information");
  } else if(req.session.data["haveYouSpokenToAnyone"] === 'landlord' || req.session.data["haveYouSpokenToAnyone"] === 'localAuthority' || req.session.data["haveYouSpokenToAnyone"] === 'charity') {
    res.redirect("points-of-touch");
  }
});

router.post("/llm/points-of-touch", function (req, res) {
  res.redirect("more-information");
});

router.post("/llm/more-information", function (req, res) {
  res.redirect("resolution");
});

router.get("/llm/resolution", function (req, res) {
  res.render("prototypes/sprint-02/llm/resolution", {
    token: process.env.OPENAI_API_KEY
  });
});

module.exports = router;
