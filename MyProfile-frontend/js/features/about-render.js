// js/features/about-render.js
function renderAbout() {
  const aboutDesc = document.getElementById("about-desc");
  const aboutName = document.getElementById("about-name");
  const aboutEmail = document.getElementById("about-email");
  const aboutLocation = document.getElementById("about-location");
  const aboutEducation = document.getElementById("about-education");
  const aboutFreelance = document.getElementById("about-freelance");
  const aboutLanguages = document.getElementById("about-languages");

  if (aboutDesc) aboutDesc.textContent = profile.aboutText;
  if (aboutName) aboutName.textContent = profile.name;
  if (aboutEmail) aboutEmail.textContent = profile.email;
  if (aboutLocation) aboutLocation.textContent = profile.location;
  if (aboutEducation) aboutEducation.textContent = profile.education;
  if (aboutFreelance) aboutFreelance.textContent = profile.freelance;
  if (aboutLanguages) aboutLanguages.textContent = profile.languages;
}

document.addEventListener("DOMContentLoaded", renderAbout);
