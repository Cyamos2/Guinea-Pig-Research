// guineaPigFoods.js
console.log("Guinea Pig Foods JavaScript loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const safeFoodsContent = document.getElementById("safeFoodsContent");
  const avoidFoodsContent = document.getElementById("avoidFoodsContent");

  // Event listeners to show/hide content
  document.getElementById("showSafeFoods").addEventListener("click", () => {
    avoidFoodsContent.classList.add("hidden");
    safeFoodsContent.classList.toggle("hidden");
  });

  document.getElementById("showAvoidFoods").addEventListener("click", () => {
    safeFoodsContent.classList.add("hidden");
    avoidFoodsContent.classList.toggle("hidden");
  });
});
