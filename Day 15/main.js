const input = document.querySelector(".drop");
const button = document.querySelector(".btn");
const boxUpload = document.querySelector(".box-upload");
const fileTxt = document.querySelector(".file");
const upload = document.querySelector(".upload");
const loading = document.querySelector(".loading");
const done = document.querySelector(".done");
const greenBar = document.querySelector(".green-bar");

input.addEventListener("change", (e) => {
    fileTxt.innerHTML = e.target.files[0].name;
    upload.style.opacity = "0";
});
button.addEventListener("click", () => {
    if (input.files.length >= 1) {
      boxUpload.style.visibility = "hidden";
      boxUpload.style.opacity = "0";
      greenBar.style.animation = "green 3.2s ease-out forwards";
      loading.style.animation = "load 3.25s ease-out forwards";
      done.style.animation = "exit .7s linear 3.2s forwards";
      button.innerHTML = "Uploading...";
      const test = setTimeout(() => {
        button.innerHTML = "Done";
      }, 3177);
      test;
      button.setAttribute("disabled", "true");
    }
});
input.addEventListener("dragenter", () => {
    boxUpload.classList.add("over");
});
input.addEventListener("dragleave", () => {
    boxUpload.classList.remove("over");
});