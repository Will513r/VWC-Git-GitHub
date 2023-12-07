// app.js

const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3000;

// linking css files  
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "views");

// Route to render the EJS file

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Handle 404 - Page Not Found
app.use((req, res, next) => {
    res.status(404).send("Sorry, the page you're looking for does not exist.");
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
