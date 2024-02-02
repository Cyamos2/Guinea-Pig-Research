// guineaPigLifeDaily.js
console.log("Guinea Pig Life Daily JavaScript loaded!");

// Sample data for daily guinea pig facts
const dailyFacts = [
  "Guinea pigs are crepuscular, meaning they are most active during dawn and dusk.",
  "Guinea pigs have an average lifespan of 5-7 years, but some can live even longer with proper care.",
  "A healthy guinea pig's diet should consist of high-quality hay, fresh vegetables, and pellets.",
  // Add more daily facts as needed
];

// Function to display a random daily fact
function displayDailyFact() {
  const randomIndex = Math.floor(Math.random() * dailyFacts.length);
  const fact = dailyFacts[randomIndex];
  console.log(`Guinea Pig Life Daily Fact: ${fact}`);
}

// Call the function to display a daily fact
displayDailyFact();
