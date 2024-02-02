// guineaPigHistory.js
console.log("Guinea Pig History JavaScript loaded!");

// Sample data for guinea pig history
const guineaPigHistoryData = [
  {
    year: 1500,
    event: "Guinea pigs were first domesticated by indigenous people in the Andes."
  },
  {
    year: 16,
    event: "Guinea pigs were brought to Europe by Spanish traders and became popular pets."
  },
  {
    year: 1800,
    event: "Guinea pigs were exhibited in shows, and different breeds were developed."
  },
  {
    year: 20,
    event: "Guinea pigs became widely used in scientific research."
  },
  {
    year: 1960,
    event: "The American Cavy Breeders Association was formed to promote and standardize guinea pig breeds."
  },
  {
    year: 2020,
    event: "Guinea pigs continue to be popular pets worldwide."
  }
];

// Display guinea pig history information
function displayGuineaPigHistoryInfo() {
  const historyContainer = document.getElementById("guineaPigHistory");

  guineaPigHistoryData.forEach(entry => {
    const historyEntry = document.createElement("div");
    historyEntry.classList.add("history-entry");

    const year = document.createElement("h3");
    year.textContent = entry.year;

    const event = document.createElement("p");
    event.textContent = entry.event;

    historyEntry.appendChild(year);
    historyEntry.appendChild(event);
    historyContainer.appendChild(historyEntry);
  });
}

// Call the function to display guinea pig history information
displayGuineaPigHistoryInfo();
