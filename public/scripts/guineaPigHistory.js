// guineaPigHistory.js
console.log("Guinea Pig History JavaScript loaded!");

// Sample data for guinea pig history
const guineaPigHistoryData = {
  introduction: {
    title: "Introduction",
    content: "Guinea pigs, also known as cavies, are domesticated rodents native to South America. They were first introduced to Europe by Spanish conquistadors in the 16th century."
  },
  popularity: {
    title: "Popularity",
    content: "Guinea pigs gained popularity as pets among European aristocrats. They were later brought to North America in the 1800s and became common household pets."
  },
  characteristics: {
    title: "Characteristics",
    content: "Guinea pigs are social animals with a lifespan of 5-7 years. They have distinctive vocalizations and various coat colors and patterns."
  }
};

// Display guinea pig history information
function displayGuineaPigHistoryInfo() {
  const historyContainer = document.getElementById("guineaPigHistory");

  for (const category in guineaPigHistoryData) {
    const section = document.createElement("div");
    section.classList.add("history-section");

    const title = document.createElement("h3");
    title.textContent = guineaPigHistoryData[category].title;

    const content = document.createElement("p");
    content.textContent = guineaPigHistoryData[category].content;

    section.appendChild(title);
    section.appendChild(content);
    historyContainer.appendChild(section);
  }

  // Add a reference to the source
  const sourceLink = document.createElement("p");
  sourceLink.innerHTML = 'Source: <a href="https://www.healthy-pet.com/blogs/blog/interesting-history-facts-and-info-about-adopting-guinea-pigs">Healthy Pet</a>';
  historyContainer.appendChild(sourceLink);
}

// Call the function to display guinea pig history information
displayGuineaPigHistoryInfo();
