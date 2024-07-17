// blog_index, blog_about, blog_create, blog_404 ,blog_posts
const { log } = console

let dataStore = {}
let cart = []

const blog_index = (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Homepage", blogs });
};
const blog_about = (req, res) => {
  res.render("about", { title: "About" });
};

const blog_posts = (req, res) => {
  log(req.body);
  dataStore["blog"] = req.body;
  cart.push(dataStore["blog"])
  log(cart, 'caert')
  res.send(cart);
};

const blog_create = (req, res) => {
  res.render("create", { title: "Create Blog" });
};
const blog_redirect =  (req, res) => {
    res.redirect("/blogs");
  }
const blog_about_us_redirect =  (req, res) => {
    res.redirect("/about");
  }
const blog_about_redirect =  (req, res) => {
    res.redirect('/blogs/about')
  }
module.exports = {
  blog_index,
  blog_about,
  blog_posts,
  blog_create,
  blog_redirect,
  blog_about_us_redirect,
  blog_about_redirect

};
