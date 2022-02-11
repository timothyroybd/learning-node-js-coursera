const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostName = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
//use this middleware to serve static HTML files
app.use(bodyParser.json());
//Hey
app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
app.get("/dishes", (req, res) => {
  res.end("Will send all the dishes to you!");
});
app.post("/dishes", (req, res) => {
  res.end(
    `Will add the dish: ${req.body.name} with details: ${req.body.description}`
  );
});
app.put("/dishes", (req, res) => {
  res.statusCode = 403;
  res.end(`Put operation not supported on /dishes`);
});
app.delete("/dishes", (req, res) => {
  res.end(`Deleting all the dishes`);
});

app.get("/dishes/:dishId", (req, res) => {
  res.end(`We will send details of the dish: ${req.params.dishId} to you`);
});
app.post("/dishes/:dishId", (req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
});
app.put("/dishes/:dishId", (req, res) => {
  res.write(`Updating the dish: ${req.params.dishId}`);
  res.end(
    `Will update the dish: ${req.params.dishId}  with details ${req.body.description}`
  );
});
app.delete("/dishes/:dishId", (req, res) => {
  res.end(`Deleting  dishe ${req.params.dishId}`);
});
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an express server</h1></body> </html>");
});

const server = http.createServer(app);
server.listen(port, hostName, () => {
  console.log(`listening to port no ${hostName}:${port}`);
});
function nothing() {
  console.log("I am doing nothing");
}
