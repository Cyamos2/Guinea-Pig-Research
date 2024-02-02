console.log("Guinea Pig Foods JavaScript loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const safeFoodsSection = document.getElementById("safeFoods");
  const unsafeFoodsSection = document.getElementById("unsafeFoods");

  safeFoodsSection.addEventListener("click", () => {
    const safeFoodsContent = document.getElementById("safeFoodsContent");
    safeFoodsContent.classList.toggle("hidden");
  });

  unsafeFoodsSection.addEventListener("click", () => {
    const unsafeFoodsContent = document.getElementById("unsafeFoodsContent");
    unsafeFoodsContent.classList.toggle("hidden");
  });
});
