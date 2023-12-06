// app.js
const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "views");

// Route to render the EJS file
app.get("/", (req, res) => {
  const data = {
    username: "William Ray", // You can pass dynamic data here
  };
  res.render("index", data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
