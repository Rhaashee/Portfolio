// js/features/contact-validation.js
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const submitBtn = form.querySelector(".btn-send");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("#contact-name").value.trim();
    const email = form.querySelector("#contact-email-input").value.trim();
    const message = form.querySelector("#contact-message").value.trim();
    const statusEl = document.getElementById("form-status");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showStatus(statusEl, "Please fill in all fields.", false);
      return;
    }

    if (!emailRegex.test(email)) {
      showStatus(statusEl, "Please enter a valid email address.", false);
      return;
    }

    if (message.length < 10) {
      showStatus(statusEl, "Message must be at least 10 characters.", false);
      return;
    }

    setLoading(true);
    const result = await sendContactMessage({ name, email, message });
    setLoading(false);

    showStatus(statusEl, result.message, result.ok);
    if (result.ok) form.reset();
  });

  function setLoading(isLoading) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    submitBtn.textContent = isLoading ? "Sending..." : "Send Message";
  }

  function showStatus(el, msg, success) {
    if (!el) return;
    el.textContent = msg;
    el.style.color = success ? "#4caf50" : "#e53935";
    el.style.display = "block";
    setTimeout(() => {
      el.style.display = "none";
    }, 5000);
  }
}

document.addEventListener("DOMContentLoaded", initContactForm);
