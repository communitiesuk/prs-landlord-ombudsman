const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();
const path = require('path');

const conversation = require('../../../data/conversation.js');
const guidancePaths = {
  landlord: 'prototypes/sprint-03/early-res-comms/partials/landlord-guidance.njk',
  tenant: 'prototypes/sprint-03/early-res-comms/partials/tenant-guidance.njk'
};

// This handles requests to '/prototypes/sprint-03/early-res-comms/'
router.get('/early-res-comms/', (req, res) => {
  req.session.data = {};
  res.render('prototypes/sprint-03/early-res-comms/index');
});

// This handles the form submission from the role selection page
router.post('/early-res-comms/select-role', (req, res) => {
  req.session.data['userRole'] = req.body.userRole;
  res.redirect('login');
});

// --- Login, Account, and Chat routes ---

router.get('/early-res-comms/login', (req, res) => {
  res.render('prototypes/sprint-03/early-res-comms/login');
});

router.post('/early-res-comms/handle-login', (req, res) => {
  res.redirect('account');
});

router.get('/early-res-comms/account', (req, res) => {
  const userRole = req.session.data['userRole'];

  res.render('prototypes/sprint-03/early-res-comms/account', {
    userRole: userRole // Now 'userRole' is available in the template
  });
});

router.get('/early-res-comms/chat', (req, res) => {
  const userRole = req.session.data['userRole'];

  if (!userRole) {
    res.redirect('/prototypes/sprint-03/early-res-comms/');
    return;
  }

  const staticGuidancePath = guidancePaths[userRole];

  res.render('prototypes/sprint-03/early-res-comms/chat', {
    conversation: conversation,
    userRole: userRole,
    guidancePath: staticGuidancePath
  });
});

// REGISTER

router.post("/early-res-comms/property-details", function (req, res) {
  res.redirect("landlord-details");
});

router.post("/early-res-comms/landlord-details", function (req, res) {
  res.redirect("tenant-details");
});

router.post("/early-res-comms/tenant-details", function (req, res) {
  res.redirect("cya");
});

router.post("/early-res-comms/cya", function (req, res) {
  res.redirect("confirmation");
});

module.exports = router;