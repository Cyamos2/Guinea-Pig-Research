// guineaPigHistory.js
console.log("Guinea Pig History JavaScript loaded!");

// Sample data for guinea pig history
const guineaPigHistoryData = [
  {
    year: 1500,
    event: "Domestication of guinea pigs by the indigenous people of the Andes."
  },
  {
    year: 1600,
    event: "Guinea pigs introduced to Europe through trade routes with South America."
  },
  {
    year: 1800,
    event: "Guinea pigs become popular pets among European royalty."
  },
  {
    year: 1900,
    event: "Guinea pigs recognized as a distinct species, Cavia porcellus."
  },
  {
    year: 2000,
    event: "Guinea pigs remain beloved pets worldwide, with various breeds and colors."
  }
];

// Display guinea pig history information
function displayGuineaPigHistory() {
  const historyContainer = document.getElementById("guineaPigHistory");

  // Loop through the history data and create HTML elements
  for (const event of guineaPigHistoryData) {
    const entry = document.createElement("div");
    entry.classList.add("history-entry");

    const year = document.createElement("span");
    year.classList.add("year");
    year.textContent = `${event.year}:`;

    const eventDescription = document.createElement("p");
    eventDescription.textContent = event.event;

    entry.appendChild(year);
    entry.appendChild(eventDescription);
    historyContainer.appendChild(entry);
  }
}

// Call the function to display guinea pig history information
displayGuineaPigHistory();
