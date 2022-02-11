const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the dishes to you!");
  })
  .post((req, res) => {
    res.end(
      `Will add the dish: ${req.body.name} with details: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`Put operation not supported on /dishes`);
  })
  .delete((req, res) => {
    res.end(`Deleting all the dishes`);
  });
dishRouter
  .route("/:dishId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "tex/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `We are sending your dish: ${req.params.dishId} from dishRouter.js`
    );
  })
  .post((req, res) => {
    res.end(
      `This is an invalid operation. Use PUT to update the dish. from dishRouter.js`
    );
  })
  .put((req, res) => {
    res.end(
      `your requested dish: ${req.params.dishId} will be updated with ${req.body.description} from dishRouter.js`
    );
  })
  .delete((req, res) => {
    res.end(
      `your request to delete ${req.params.dishId} is on process. from dishRouter.js`
    );
  });
module.exports = dishRouter;
