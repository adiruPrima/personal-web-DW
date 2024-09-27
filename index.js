const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "assets")));

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/project", (req, res) => {
  res.render("project");
});

app.get("/add-project", (req, res) => {
  res.render("add-project");
});

app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Dynamic Route
app.get("/project/detail/:id", (req, res) => {
  res.render("project-detail");
});

app.listen(port, () => {
  console.log(`This is port ${port} bitch!!`);
});
