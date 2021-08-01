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

router.post("/send-email-contact-us-form", async function (req, res, next) {
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

router.post(
  "/send-email-get-instant-quote-form",
  async function (req, res, next) {
    const body = req.body;
    const sanitizedBody = JSON.parse(req.sanitize(JSON.stringify(body)));
    const { name, phone, email, orderDescription } = sanitizedBody;
    const emailHTML = `
        <html>
          <body>
            <p>A visitor has requested quotation for the following requirements:</p>
            <p>
              Description: ${orderDescription} <br>
            </p>
            <p>
              Visitor's contact details: <br>
              Name: ${name} <br>
              Phone: ${phone} <br>
              Email id: ${email || "Not provided"} <br>
            </p>
          </body>
        </html>
    `;
    const result = await sendEmail('Quotation request', emailHTML);
    if (!result) {
      res.send(500).send("An error occured");
      return;
    }
    res.status(201).send("OK");
  }
);
module.exports = router;
