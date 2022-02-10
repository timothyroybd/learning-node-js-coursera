const http = require("http");
const hostName = "localhost";
const port = 3000;
//read and write files
const fs = require("fs");
//get the path of a file
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(`Reques for ${req.url} by method`);
  if (req.method === "GET") {
    let fileUrl;
    if (req.url === "/") fileUrl = "/index.html";
    else fileUrl = req.url;
    const filePath = path.resolve("./public" + fileUrl);
    const fileExt = path.extname(filePath);
    if (fileExt === ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          res.seHeader("Content-Type", "text/html");
          res.end(
            "<html> <body> <h1> Error 404: File Not Found </h1></body></html>"
          );
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(
        "<html> <body> <h1> Error 404: File Not Found </h1></body></html>"
      );
      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<html> <body> <h1> Req Method not supported</h1></body></html>");
  }

  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.end("<html> <body> <h1> Hello World </h1><body></html>");
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
