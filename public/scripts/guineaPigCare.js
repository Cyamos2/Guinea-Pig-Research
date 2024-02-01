// guineaPigCare.js
console.log("Guinea Pig Care JavaScript loaded!");

// Sample data for guinea pig care
const guineaPigCareData = {
  housing: {
    title: "Housing",
    content: "Guinea pigs need a spacious cage with good ventilation. Provide a hiding spot and soft bedding material like hay or fleece."
  },
  feeding: {
    title: "Feeding",
    content: "A balanced diet includes fresh hay, vegetables, and high-quality guinea pig pellets. Avoid giving them high-calcium vegetables."
  },
  grooming: {
    title: "Grooming",
    content: "Guinea pigs groom themselves, but you should also help by brushing their fur regularly. Trim their nails when necessary."
  },
  exercise: {
    title: "Exercise",
    content: "Guinea pigs love to run and play. Provide them with a safe and secure area to explore outside the cage."
  }
};

// Display guinea pig care information
function displayGuineaPigCareInfo() {
  const careContainer = document.getElementById("guineaPigCare");

  for (const category in guineaPigCareData) {
    const section = document.createElement("div");
    section.classList.add("care-section");

    const title = document.createElement("h3");
    title.textContent = guineaPigCareData[category].title;

    const content = document.createElement("p");
    content.textContent = guineaPigCareData[category].content;

    section.appendChild(title);
    section.appendChild(content);
    careContainer.appendChild(section);
  }
}

// Call the function to display guinea pig care information
displayGuineaPigCareInfo();
