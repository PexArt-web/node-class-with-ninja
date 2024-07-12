const { log } = console;
const http = require("http");
const fs = require("fs");
const httpServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./views/index.html", {encoding:'utf-8'} ,(err, data) => {
      if (err) {
        log(err);
      }
      res.statusCode = 200;
      res.setHeader("content-type", "text/html");
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./views/about.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        log(err);
      }
      res.statusCode = 200;
      res.setHeader("content-type", "text/html");

      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./views/404.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        log(err);
      }
      res.statusCode = 404;
      res.setHeader("content-type", "text/html");
     
      res.write(data);
      res.end();
    });
  }
});

httpServer.listen(3000, () => {
  log("listening for HTTP requests");
});
