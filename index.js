document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
  updateDom();
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

updateDom = () => {
    document.querySelector("p#text").innerHTML = "This is really cool!"
}