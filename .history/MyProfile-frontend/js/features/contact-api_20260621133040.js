// js/features/contact-api.js
const EMAILJS_SERVICE_ID  = "service_xyz789";   // replace with yours
const EMAILJS_TEMPLATE_ID = "template_gttor2v";  // replace with yours
const EMAILJS_PUBLIC_KEY  = "your_public_key";  // replace with yours

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name    = document.getElementById("contact-name").value.trim();
    const email   = document.getElementById("contact-email-input").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    status.style.display = "block";
    status.style.color   = "var(--accent)";
    status.textContent   = "Sending...";

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  name,
      from_email: email,
      message:    message,
    })
    .then(() => {
      status.style.color = "#4caf50";
      status.textContent = "✅ Message sent! I'll get back to you soon.";
      form.reset();
    })
    .catch((err) => {
      status.style.color = "#f44336";
      status.textContent = "❌ Something went wrong. Please try again.";
      console.error("EmailJS error:", err);
    });
  });
});