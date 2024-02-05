// guineaPigLifeDaily.js
console.log("Guinea Pig Life Daily JavaScript loaded!");

// Sample data for guinea pig daily life
const guineaPigLifeDailyData = {
  feeding: {
    title: "Feeding",
    content: "Provide a balanced diet with fresh hay, vegetables, and high-quality guinea pig pellets. Ensure a daily supply of fresh water."
  },
  exercise: {
    title: "Exercise",
    content: "Guinea pigs need daily exercise. Create a safe and secure play area outside the cage for them to explore and play."
  },
  grooming: {
    title: "Grooming",
    content: "While guinea pigs groom themselves, assist by brushing their fur regularly. Check and trim their nails when necessary."
  },
  socialization: {
    title: "Socialization",
    content: "Guinea pigs are social animals. Spend time interacting with them daily to build a bond. Consider having more than one guinea pig for companionship."
  }
};

// Display guinea pig daily life information
function displayGuineaPigLifeDaily() {
  const lifeDailyContainer = document.getElementById("guineaPigLifeDaily");

  // Loop through the daily life data and create HTML elements
  for (const category in guineaPigLifeDailyData) {
    const section = document.createElement("div");
    section.classList.add("life-daily-section");

    const title = document.createElement("h3");
    title.textContent = guineaPigLifeDailyData[category].title;

    const content = document.createElement("p");
    content.textContent = guineaPigLifeDailyData[category].content;

    section.appendChild(title);
    section.appendChild(content);
    lifeDailyContainer.appendChild(section);
  }
}

// Call the function to display guinea pig daily life information
displayGuineaPigLifeDaily();
