const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  //   console.log(req.query);
  res.render("about", {
    city: req.query.name,
  });
});

app.listen(3000, () => {
  console.log(" http://localhost:3000");
});
