console.log("Guinea Pig Adoption JavaScript loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const petStoresSection = document.getElementById("petStores");
  const sheltersSection = document.getElementById("shelters");

  petStoresSection.addEventListener("click", () => {
    const petStoresContent = document.getElementById("petStoresContent");
    petStoresContent.classList.toggle("hidden");
  });

  sheltersSection.addEventListener("click", () => {
    const sheltersContent = document.getElementById("sheltersContent");
    sheltersContent.classList.toggle("hidden");
  });
});
