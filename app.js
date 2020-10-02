// app.js
// require packages used in the project
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const professions = require('./Profession.json').results
const generateTrashTalk = require("./generate_talk");
const Handlebars = require('handlebars')
const app = express();
const port = 3000;

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");


//set body-parser
app.use(bodyParser.urlencoded({
  extended: true
}))

// set static files
app.use(express.static('public'))

// routes setting
app.get("/", (req, res) => {

  res.render('index', {
    professions
  })
});

app.use(bodyParser.urlencoded({
  extended: true
}))

app.post("/", (req, res) => {
  const options = req.body.professions;
  const trashTalk = generateTrashTalk(options);
  res.render("index", {
    professions,
    trashTalk,
    options
  });
});

//自定義helper
Handlebars.registerHelper('if_equal', function (a, b) {
  if (a === b) {
    return 'checked'
  }
})


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});