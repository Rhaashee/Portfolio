// js/features/typing-effect.js
function initTypingEffect() {
  const el = document.getElementById("hero-tagline-text");
  if (!el || typeof profile === "undefined") return;

  const strings = profile.typingStrings || [profile.tagline];
  let strIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = strings[strIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        strIndex = (strIndex + 1) % strings.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 80);
  }

  tick();
}

document.addEventListener("DOMContentLoaded", initTypingEffect);
