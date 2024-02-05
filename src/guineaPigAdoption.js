// guineaPigAdoption.js
console.log("Guinea Pig Adoption JavaScript loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const petStoresContent = document.getElementById("petStoresContent");
  const sheltersContent = document.getElementById("sheltersContent");
  const adoptionConsiderations = document.getElementById("adoptionConsiderations");

  // Event listeners to show/hide content
  document.getElementById("showPetStores").addEventListener("click", () => {
    sheltersContent.classList.add("hidden");
    adoptionConsiderations.classList.add("hidden");
    petStoresContent.classList.toggle("hidden");
  });

  document.getElementById("showShelters").addEventListener("click", () => {
    petStoresContent.classList.add("hidden");
    adoptionConsiderations.classList.add("hidden");
    sheltersContent.classList.toggle("hidden");
  });

  document.getElementById("showConsiderations").addEventListener("click", () => {
    petStoresContent.classList.add("hidden");
    sheltersContent.classList.add("hidden");
    adoptionConsiderations.classList.toggle("hidden");
  });
});
