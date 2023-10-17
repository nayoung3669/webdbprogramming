//express.js
//lab

const express = require("express");

const app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("About page!");
});

app.listen(port, "localhost", () => {
  console.log(`Example app is listening on port ${port}`);
});
