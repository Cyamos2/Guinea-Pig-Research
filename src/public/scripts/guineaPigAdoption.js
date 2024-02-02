// guineaPigAdoption.js
console.log("Guinea Pig Adoption JavaScript loaded!");

// Sample data for guinea pig adoption
const guineaPigAdoptionData = {
  petStores: {
    title: "Pet Stores",
    content: "Pet stores offer a variety of guinea pig breeds. Ensure that the store practices ethical breeding and cares for the animals properly."
  },
  shelters: {
    title: "Shelters",
    content: "Adopting from shelters is a great way to give a home to a guinea pig in need. Shelters often have guinea pigs of different ages and breeds."
  },
  breeders: {
    title: "Breeders",
    content: "Reputable breeders can provide specific guinea pig breeds. Ensure the breeder follows ethical breeding practices and prioritizes the health of the animals."
  }
};

// Display guinea pig adoption information
function displayGuineaPigAdoptionInfo() {
  const adoptionContainer = document.getElementById("guineaPigAdoption");

  for (const category in guineaPigAdoptionData) {
    const section = document.createElement("div");
    section.classList.add("adoption-section");

    const title = document.createElement("h3");
    title.textContent = guineaPigAdoptionData[category].title;

    const content = document.createElement("p");
    content.textContent = guineaPigAdoptionData[category].content;

    section.appendChild(title);
    section.appendChild(content);
    adoptionContainer.appendChild(section);
  }
}

// Call the function to display guinea pig adoption information
displayGuineaPigAdoptionInfo();

  