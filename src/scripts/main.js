document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let numberMax = document.getElementById("number-max").value;
      numberMax = parseInt(numberMax);

      let numberRandom = Math.random() * numberMax;
      numberRandom = Math.floor(numberRandom + 1);

      document.getElementById("result-value").innerText = numberRandom;
      document.querySelector(".result").style.display = "block";
    });
});
