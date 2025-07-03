//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

router.use((req, res, next) => {
  res.locals.query = req.query;
  res.locals.path = req.path;

  next();
});

// Sprint routes setup
const sprint00 = require("./views/prototypes/sprint-00/_routes");
router.use("/prototypes/sprint-00", sprint00);

const sprint01 = require("./views/prototypes/sprint-01/_routes");
router.use("/prototypes/sprint-01", sprint01);