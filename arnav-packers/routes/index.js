var express = require("express");
var router = express.Router();
const sendEmail = require("../utils/email");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Arnav Packers" });
});

router.get("/corrugated-box-detail", function (req, res, next) {
  res.render("corrugated-box-details");
});

router.get("/duplex-box-details", function (req, res, next) {
  res.render("duplex-box-details");
});

router.get("/pastry-box-details", function (req, res, next) {
  res.render("pastry-box-details");
});

router.post("/contact-us-form-send-email", async function (req, res, next) {
  const body = req.body;
  const sanitizedBody = JSON.parse(req.sanitize(JSON.stringify(body)));
  const { name, email, subject, message } = sanitizedBody;
  const emailHTML = `
      <html>
        <body>
          <p>A visitor has submitted the contact form.</p>
          <p>
            Name: ${name} <br>
            Email: ${email} <br>
            Subject: ${subject} <br>
            Message: ${message} <br>
          </p>
        </body>
      </html>
  `;
  const result = await sendEmail("Visitor Message", emailHTML);
  if (!result) {
    res.send(500).send("An error occured");
    return;
  }
  res.status(201).send("OK");
});
module.exports = router;
