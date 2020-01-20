var express = require('express');
var router = express.Router();
const path = require("path");
const dateFormat = require("dateformat");

const messages = [
  { text: "Hi there!", user: "Amando", added: dateFormat(new Date()) },
  { text: "Hello world!", user: "Charles", added: dateFormat(new Date()) },
]

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' , messages} );
});

router.get("/new", (req, res, next) => {
  res.sendFile("messageForm.html", {root: path.join(__dirname, "/../views")});
})

router.post("/new", (req, res, next) => {

  messages.push(
    {
      text: req.body.messageText,
      user: req.body.user,
      added: dateFormat(Date.now())
    }
  );
  res.redirect("/")
})

module.exports = router;
