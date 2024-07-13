const { log } = console;
const express = require("express");
const app = express();
port = 7000;
app.listen(port, () => {
  log("starting");
});
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirect to about page
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => res.sendFile("./views/404.html", { root: __dirname }));
