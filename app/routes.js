//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

router.use((req, res, next) => {
  res.locals.query = req.query;
  res.locals.path = req.path;

  // Set govBranded cookie if it doesn't exist
  if (!req.cookies.govBranded) {
    res.cookie("govBranded", "true", { maxAge: 900000, httpOnly: true });
  }

  // Make the cookie value available to templates
  res.locals.govBranded = req.cookies.govBranded;
  console.log("res.locals.govBranded:", res.locals.govBranded);

  next();
});

// Sprint routes setup

const sprint00 = require("./views/prototypes/sprint-00/_routes");
router.use("/prototypes/sprint-00", sprint00);

const sprint01 = require("./views/prototypes/sprint-01/_routes");
router.use("/prototypes/sprint-01", sprint01);
