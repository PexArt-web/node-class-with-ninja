const { log } = console;
const fs = require("fs");
const http = require("http");
const httpServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./views/index.html", (err, data) => {
      if (err) {
        log(err);
      }
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./views/about.html", (err, data) => {
      if (err) {
        log(err);
      }
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./views/404.html", (err, data) => {
      if (err) {
        log(err);
      }
      res.statusCode = 404;
      res.write(data);
      res.end();
    });
  }
});

httpServer.listen(3000, () => {
  log("listening for requests...");
});
