// guineaPigLifeDaily.js
console.log("Guinea Pig Life Daily JavaScript loaded!");

// Sample data for guinea pig life daily
const guineaPigLifeDailyData = {
  lifespan: {
    title: "Lifespan",
    content: "Typically, guinea pigs live for around 5 to 7 years. However, proper care, a balanced diet, and a stress-free environment can contribute to a longer and healthier life."
  },
  // Add more sections as needed
};

// Display guinea pig life daily information
function displayGuineaPigLifeDailyInfo() {
  const lifeDailyContainer = document.getElementById("lifespan");

  for (const category in guineaPigLifeDailyData) {
    const section = document.createElement("div");
    section.classList.add("life-daily-section");

    const title = document.createElement("h2");
    title.textContent = guineaPigLifeDailyData[category].title;

    const content = document.createElement("p");
    content.textContent = guineaPigLifeDailyData[category].content;

    section.appendChild(title);
    section.appendChild(content);
    lifeDailyContainer.appendChild(section);
  }
}

// Call the function to display guinea pig life daily information
displayGuineaPigLifeDailyInfo();
