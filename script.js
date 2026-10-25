const day = 24 * 60 * 60 * 1000;
const maxAge = 14;

const photo = document.querySelector("[data-photo-date]");
const hibernating = document.querySelector(".hibernating");

if (photo && hibernating) {
  const parts = photo.dataset.photoDate.split("-").map(Number);
  const photoDay = Date.UTC(parts[0], parts[1] - 1, parts[2]);

  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const age = Math.floor((today - photoDay) / day);

  if (age > maxAge) {
    photo.hidden = true;
    hibernating.hidden = false;
  }
}

document.querySelectorAll("[data-year]").forEach(function (year) {
  year.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-contact]").forEach(function (years) {
  years.addEventListener("click", function () {
    const mail = years.parentElement.querySelector(".mail");
    const visible = mail.classList.toggle("visible");
    mail.setAttribute("aria-hidden", String(!visible));
  });
});
