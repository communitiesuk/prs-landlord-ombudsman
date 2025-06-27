//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes above the module.exports line

// Multiple

router.post('/multiple/are-you-renting-in-england-or-wales', function (req, res) {
    if (req.session.data['renting-in-england-or-wales'] == 'Yes') {
        res.redirect('what-do-you-need-help-with');
    }
    else if (req.session.data['renting-in-england-or-wales'] == 'No') {
        res.redirect('cannot-use-service');
    }
});

router.post('/multiple/what-do-you-need-help-with', function (req, res) {
    if (req.session.data['need-help-with'] == 'contractual') {
        res.redirect('contractual');
    }
    else if (req.session.data['need-help-with'] == 'maintanence') {
        res.redirect('maintanence-and-repairs');
    }
});

router.post('/multiple/contractual', function (req, res) {
    res.redirect('landlord-legal-issues');
});
  
router.post('/multiple/landlord-legal-issues', function (req, res) {
    res.redirect('triage-results');
});
  
// Single

router.post('/single/are-you-renting-in-england-or-wales', function (req, res) {
    if (req.session.data['renting-in-england-or-wales'] == 'Yes') {
        res.redirect('what-do-you-need-help-with');
    }
    else if (req.session.data['renting-in-england-or-wales'] == 'No') {
        res.redirect('cannot-use-service');
    }
});

router.post('/single/what-do-you-need-help-with', function (req, res) {
    if (req.session.data['need-help-with'] == 'contractual') {
        res.redirect('contractual');
    }
    else if (req.session.data['need-help-with'] == 'maintanence') {
        res.redirect('maintanence-and-repairs');
    }
});

router.post('/single/contractual', function (req, res) {
    res.redirect('landlord-legal-issues');
});

router.post('/single/maintanence-and-repairs', function (req, res) {
    res.redirect('utility-problem');
});

router.post('/single/utility-problem', function (req, res) {
    res.redirect('next-steps');
});
  
router.post('/single/landlord-legal-issues', function (req, res) {
    res.redirect('triage-results');
});

module.exports = router