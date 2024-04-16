const express = require("express");
const router = express.Router();
const { sendSMS } = require("../twilio/twilioClient");

// POST - Send a SMS message
router.post("/sms", (req, res) => {
  const attributes = req.body;
  console.log("sms : :", req.body);
  sendSMS(attributes.recipient, attributes.message)
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// POST - Receive SMS Message
router.post("/receiveSMS", (req, res) => {
  const attributes = req.body;
  console.log(attributes);
  res.status(201).json({ attributes });
});

router.get("/test", (req, res) => {
  res.send("Server working!");
});

module.exports = router;
