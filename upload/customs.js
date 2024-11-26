var button = document.createElement("span");

button.innerText = "Accéder à la page d'accueil";

button.className = "button";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://flixhive.site/click-next-to-watch-without-ads/", "_blank");
});
document.getElementById("view-full").appendChild(button);
