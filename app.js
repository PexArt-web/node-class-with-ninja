const { log } = console;
const express = require("express");
const app = express();
const morgan = require("morgan");
const blogRoutes = require('./routes/blogRoutes')
// const mongoose = require("mongoose");
// connect to mongodb server
// const dbURI = 'mongodb+srv://pexart74:50FtkJbAQvNLY5Qr@blog.iggkbil.mongodb.net/Blog?retryWrites=true&w=majority';
//   mongoose.connect(dbURI)
//   .then((result) => app.listen(port, log("starting server...")))
//   .catch((error)=> log(' connection error'))
// error coonecting to mongodb database
const port = 8000;
app.listen(port, log("starting server..."));
// registering views
app.set("view engine", "ejs");
// middleware and static file
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

let dataStore = {};
// blog url routes

app.use(blogRoutes)

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
