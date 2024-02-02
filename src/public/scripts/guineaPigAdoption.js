document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle visibility of pros and cons
    function toggleVisibility(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.toggle('hidden');
    }
  
    // Event listeners for each section
    document.getElementById('petStores').addEventListener('click', function () {
      toggleVisibility('petStoresContent');
    });
  
    document.getElementById('shelters').addEventListener('click', function () {
      toggleVisibility('sheltersContent');
    });
  
    document.getElementById('breeders').addEventListener('click', function () {
      toggleVisibility('breedersContent');
    });
  
    document.getElementById('rescueGroups').addEventListener('click', function () {
      toggleVisibility('rescueGroupsContent');
    });
  });
  