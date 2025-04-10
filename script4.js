
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert(`You clicked on: ${link.textContent}`);
    });
  });
document.querySelector(".hero .btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Navigating to dashboard...");
  });
document.querySelectorAll(".feature").forEach((feature) => {
    feature.addEventListener("click", () => {
      const title = feature.querySelector("h3")?.textContent;
      alert(`Feature: ${title}`);
    });
  });
document
    .querySelector(".create-tournament .btn")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Redirecting to Create Tournament form...");
    });
    const regForm = document.querySelector(".registration-form form");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const teamName = regForm.querySelector('input[type="text"]').value;
      const email = regForm.querySelector('input[type="email"]').value;
      const discord = regForm.querySelectorAll('input[type="text"]')[1].value;
      alert(`Team Registered!\nName: ${teamName}\nEmail: ${email}\nDiscord: ${discord}`);
      regForm.reset();
    });
  }
document.querySelector(".contact .btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to Instagram...");
  });
document.querySelectorAll("footer a").forEach((footerLink) => {
    footerLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert(`Footer Link Clicked: ${footerLink.textContent}`);
    });
  });
document.querySelectorAll(".payment-icons img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
const pointsTable = document.querySelector(".points-table ul");
  if (pointsTable) {
    const li = document.createElement("li");
    li.textContent = "Auto-updating points coming soon...";
    li.style.color = "#00cc66";
    pointsTable.appendChild(li);
  }
});


