// app.js

const express = require("express");
const app = express();

const port = 3000;

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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
