const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();
const path = require('path');

const conversation = require('../../../data/conversation-landlord-positive.js');
const guidancePaths = {
  landlord: 'prototypes/sprint-04/early-res-comms/partials/landlord-guidance.njk',
  tenant: 'prototypes/sprint-04/early-res-comms/partials/tenant-guidance.njk'
};

// Add your routes above the module.exports line
// LLM
router.post("/llm/are-you-renting-in-england-or-wales", function (req, res) {
  if (req.session.data["rentingEnglandOrWales"] == "yes") {
    res.redirect("urgent-issue");
  } else if (req.session.data["rentingEnglandOrWales"] == "no") {
    res.redirect("cannot-use-service");
  }
});

router.post("/llm/urgent-issue", function (req, res) {
  if (req.session.data["urgentIssue"] == "yes") {
    res.redirect("urgent-resolution");
  } else {
    res.redirect("what-do-you-need-help-with");
  }
});

router.post("/llm/what-do-you-need-help-with", function (req, res) {
  res.redirect("have-you-spoken-to-your-landlord");
});

router.post("/llm/have-you-spoken-to-your-landlord", function (req, res) {
  if (req.session.data["haveYouSpokenToYourLandlord"] == "yes") {
    res.redirect("points-of-touch");
  } else {
    res.redirect("more-information");
  }
});

router.post("/llm/points-of-touch", function (req, res) {
  res.redirect("more-information");
});

router.post("/llm/more-information", function (req, res) {
  res.redirect("resolution");
});

router.get("/llm/resolution", function (req, res) {
  res.render("prototypes/sprint-04/llm/resolution", {
    token: process.env.OPENAI_API_KEY
  });
});

// GOV BRANDED

// Route 2: Start Page
router.get('/early-res-comms/', (req, res) => {
  req.session.data = {};
  res.render('prototypes/sprint-04/early-res-comms/index');
});

// Route 3: Handle role selection and redirect to the sign-in page with a query parameter
router.post('/early-res-comms/select-role', (req, res) => {
  const userRole = req.body.userRole;
  req.session.data['userRole'] = userRole;

  // Redirect to a URL with a query parameter, e.g., 'sign-in?role=landlord'
  res.redirect(`sign-in?role=${userRole}`);
});

/*
// Route 4: Catches the '/sign-in' URL and checks the query parameter
router.get('/early-res-comms/sign-in', (req, res) => {
  // Read the role from the query parameter
  const role = req.query.role;
  //Save the role to the session here as well
  req.session.data['userRole'] = role;
  
  // Render the correct template based on the role
  res.render(`prototypes/sprint-04/early-res-comms/${role}-sign-in`);
});
*/

// NEW Route 4: A single route to handle both showing and submitting the sign-in page
router.all('/early-res-comms/sign-in', (req, res) => {
  // If the form was submitted, it's a POST request
  if (req.method === 'POST') {
    res.redirect('account');
  } 
  // Otherwise, it's a GET request to show the page
  else {
    const role = req.query.role;
    req.session.data['userRole'] = role; // Save role to session
    res.render(`prototypes/sprint-04/early-res-comms/${role}-sign-in`);
  }
});

// Route 5: Sign-in form handler - simplified path
//router.post('/early-res-comms/handle-sign-in', (req, res) => {
  //res.redirect('account');
//});

// Route 6: Account page - UPDATED
router.get('/early-res-comms/account', (req, res) => {
  // Get the userRole from the session
  const userRole = req.session.data['userRole'];

  // Pass the userRole variable to the template when rendering
  res.render('prototypes/sprint-04/early-res-comms/account', {
    userRole: userRole
  });
});

// Route 7: Main chat page
router.get('/early-res-comms/chat', (req, res) => {
  const userRole = req.session.data['userRole'];

  if (!userRole) {
    res.redirect('/prototypes/sprint-04/early-res-comms/');
    return;
  }

  const staticGuidancePath = guidancePaths[userRole];

  res.render('prototypes/sprint-04/early-res-comms/chat', {
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

// UNBRANDED

// Route 2: Start Page
router.get('/early-res-comms-unbranded/', (req, res) => {
  req.session.data = {};
  res.render('prototypes/sprint-04/early-res-comms-unbranded/index');
});

// Route 3: Handle role selection and redirect to the sign-in page with a query parameter
router.post('/early-res-comms-unbranded/select-role', (req, res) => {
  const userRole = req.body.userRole;
  req.session.data['userRole'] = userRole;

  // Redirect to a URL with a query parameter, e.g., 'sign-in?role=landlord'
  res.redirect(`sign-in?role=${userRole}`);
});

/*
// Route 4: Catches the '/sign-in' URL and checks the query parameter
router.get('/early-res-comms-unbranded/sign-in', (req, res) => {
  // Read the role from the query parameter
  const role = req.query.role;
  
  // Render the correct template based on the role
  res.render(`prototypes/sprint-04/early-res-comms-unbranded/${role}-sign-in`);
});

*/

// NEW Route 4: A single route to handle both showing and submitting the sign-in page
router.all('/early-res-comms-unbranded/sign-in', (req, res) => {
  // If the form was submitted, it's a POST request
  if (req.method === 'POST') {
    res.redirect('account');
  } 
  // Otherwise, it's a GET request to show the page
  else {
    const role = req.query.role;
    req.session.data['userRole'] = role; // Save role to session
    res.render(`prototypes/sprint-04/early-res-comms-unbranded/${role}-sign-in`);
  }
});

// Route 5: Sign-in form handler - simplified path
//router.post('/early-res-comms-unbranded/handle-sign-in', (req, res) => {
  //res.redirect('account');
//});

// Route 6: Account page - UPDATED
router.get('/early-res-comms-unbranded/account', (req, res) => {
  // Get the userRole from the session
  const userRole = req.session.data['userRole'];

  // Pass the userRole variable to the template when rendering
  res.render('prototypes/sprint-04/early-res-comms-unbranded/account', {
    userRole: userRole
  });
});

// Route 7: Main chat page
router.get('/early-res-comms-unbranded/chat', (req, res) => {
  const userRole = req.session.data['userRole'];

  if (!userRole) {
    res.redirect('/prototypes/sprint-04/early-res-comms-unbranded/');
    return;
  }

  const staticGuidancePath = guidancePaths[userRole];

  res.render('prototypes/sprint-04/early-res-comms-unbranded/chat', {
    conversation: conversation,
    userRole: userRole,
    guidancePath: staticGuidancePath
  });
});

// REGISTER

router.post("/early-res-comms-unbranded/property-details", function (req, res) {
  res.redirect("landlord-details");
});

router.post("/early-res-comms-unbranded/landlord-details", function (req, res) {
  res.redirect("tenant-details");
});

router.post("/early-res-comms-unbranded/tenant-details", function (req, res) {
  res.redirect("cya");
});

router.post("/early-res-comms-unbranded/cya", function (req, res) {
  res.redirect("confirmation");
});

module.exports = router;