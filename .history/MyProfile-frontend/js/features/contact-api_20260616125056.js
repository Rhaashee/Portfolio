// js/features/contact-api.js
// Connects the contact form to the live Node/Express backend.
// Update API_BASE_URL to your deployed backend URL when you go live.

const API_BASE_URL = "http://localhost:5000";

async function sendContactMessage({ name, email, message }) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    return { ok: res.ok, message: data.message };
  } catch (err) {
    console.error("Contact API request failed:", err);
    return {
      ok: false,
      message: "Couldn't reach the server. Please check your connection and try again.",
    };
  }
}
