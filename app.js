require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.json());

const auth = {
  auth: {
    api_key: process.env.MG_API_KEY,
    domain: process.env.MG_DOMAIN
  }
}

app.post("/", (req, res) => {
  const { emailAddress, emailSubject, emailMessage } = req.body;
  console.log(req.body);
  const nodemailerMailgun = nodemailer.createTransport(mg(auth));
  nodemailerMailgun.sendMail({
    from: `sender: <${emailAddress}>`,
    to: "design.johnaguilar@gmail.com",
    subject: emailSubject,
    text: emailMessage
  }, (err, data) => {
    if (err) {
      console.log(err);
    } 
    // else {
    //   console.log("Message sent!");
    // }
  });
  // res.json({ message: 'Message received!'});
  
  res.redirect("/");

});
// |---------------
// | Get Routes
// |---------------
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log(`Port is running at ${port}`));