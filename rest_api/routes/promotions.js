const app = require("express");
const bodyParser = require("body-parser");
const promotionsRouter = app.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Hey, you will get 20% off!`);
  })
  .post((req, res) => {
    res.end(`Invalid Request`);
  })
  .delete((req, res) => {
    res.end(`You don't have permission to delete`);
  })
  .put((req, res) => {
    res.end(`You don't have permission to put`);
  })
  .post((req, res) => {
    res.end(`You don't have permission to post`);
  });
promotionsRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `We have promotions for this your requested amount ${req.params.promoId}`
    );
  })
  .post((req, res) => {
    res.end(`Sorry, Invalid request`);
  })
  .put((req, res) => {
    res.end(`We have updated your requested amount ${req.params.promoId}`);
  })
  .delete((req, res) => {
    res.end(`We have deleted your requested amount ${req.params.promoId}`);
  });
module.exports = promotionsRouter;
