const express = require("express");
const router = express.Router();
const blogController = require('../controller/blogController')
router.get("/blogs", blogController.blog_index);

router.get("/", blogController.blog_redirect)

router.post("/blogs", blogController.blog_posts);

router.get("/blogs/about", blogController.blog_about);
  

router.get("/about", blogController.blog_about_redirect);

// redirect back to the about page /about

router.get("/about-us", blogController.blog_about_us_redirect);

router.get("/blogs/create", blogController.blog_create);

router.get('/blogs/:id',(req, res)=>{
  log(req.params.id)
})

module.exports = router
