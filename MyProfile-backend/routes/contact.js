// routes/contact.js
const express = require("express");
const router = express.Router();

const { validateContact } = require("../middleware/validateContact");
const { contactLimiter } = require("../middleware/rateLimiter");
const { sendContactEmail } = require("../config/mailer");

// POST /api/contact
router.post("/", contactLimiter, validateContact, async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendContactEmail({ name, email, message });
    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (err) {
    console.error("Email send failed:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message. Please try again later.",
    });
  }
});

module.exports = router;
