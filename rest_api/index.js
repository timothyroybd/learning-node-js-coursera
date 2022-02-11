const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const dishRouter = require("./routes/dishRouter");
const promotions = require("./routes/promotions");
const hostName = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
//use this middleware to serve static HTML files
app.use(bodyParser.json());
//Hey

app.use("/dishes", dishRouter);
app.use("/promotions", promotions);
app.use(express.static(path.join(__dirname, "/public")));
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an express server</h1></body> </html>");
});

const server = http.createServer(app);
server.listen(port, hostName, () => {
  console.log(`listening to port no ${hostName}:${port}`);
});
