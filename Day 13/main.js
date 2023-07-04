function toggle() {
  document.getElementById("detail-1").classList.toggle("active");
}

const infos = document.querySelector(".infos").childNodes[1];
const image = document.querySelector(".image").childNodes[1];

document.querySelectorAll(".profile").forEach((e) => {
  e.addEventListener("click", (a) => {
    toggle();
    image.src = a.currentTarget.childNodes[1].src;
    infos.innerHTML = a.currentTarget.childNodes[5].textContent;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  toggle();
});