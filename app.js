//jshint esversion:6

require("dotenv").config();
console.log(`Database name is ${process.env.DB_NAME}`);


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
  "The purpose of this is to gain real world practice with the curriculum provided by VWC my next goal will to be to connect a database to save the post as i do the modules";
const aboutContent =
  "I am a Veteran that turned to a life of drugs and crime that led me to addiction and prison. After attempting suicide and failing at it (I don't think I really wanted to die but felt like it). I was led to Narcotics Anonymous by a friend that I was in addiction with that had turned his life around. On Sept 11th 2017 I went to my first meeting and have been clean ever since following my change of life choices I was asked to come work at the treatment center that I went through as a patient. This Led me into the next few years working as a Social worker and eventually healthcare management. While this is rewarding there doesnt seem to be much of a lucrative future in it and I had a late start in life so I need to make up for financially lost times. Which led me to coding and now it is my sole mission to become employed as a software developer!!  ";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
var posts = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { homeContent: homeStartingContent, posts: posts });
});

app.get("/about", (req, res) => {
  res.render("about", { about: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contact: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.blogTitle,
    content: req.body.blogPost,
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", (req, res) => {
  const reqTitle = _.lowerCase(req.params.postName);

  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === reqTitle) {
      res.render("post", {
        title: post.title,
        content: post.content,
      });
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
