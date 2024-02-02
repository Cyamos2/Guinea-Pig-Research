// guineaPigFoods.js
console.log("Guinea Pig Foods JavaScript loaded!");

// Sample data for guinea pig foods
const guineaPigFoodsData = {
  safeFoods: [
    "Fresh hay",
    "Fresh vegetables (e.g., bell peppers, cucumber, carrot)",
    "Fresh fruits (e.g., apple slices, berries)",
    "High-quality guinea pig pellets"
  ],
  avoidFoods: [
    "Chocolate",
    "Onions",
    "Garlic",
    "Caffeine",
    "Dairy products"
  ]
};

// Display guinea pig foods information
function displayGuineaPigFoodsInfo() {
  const foodsContainer = document.getElementById("guineaPigFoods");

  const safeFoodsSection = document.createElement("div");
  safeFoodsSection.classList.add("foods-section");

  const safeFoodsTitle = document.createElement("h3");
  safeFoodsTitle.textContent = "Safe Foods";

  const safeFoodsList = document.createElement("ul");
  guineaPigFoodsData.safeFoods.forEach(food => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    safeFoodsList.appendChild(listItem);
  });

  safeFoodsSection.appendChild(safeFoodsTitle);
  safeFoodsSection.appendChild(safeFoodsList);
  foodsContainer.appendChild(safeFoodsSection);

  const avoidFoodsSection = document.createElement("div");
  avoidFoodsSection.classList.add("foods-section");

  const avoidFoodsTitle = document.createElement("h3");
  avoidFoodsTitle.textContent = "Foods to Avoid";

  const avoidFoodsList = document.createElement("ul");
  guineaPigFoodsData.avoidFoods.forEach(food => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    avoidFoodsList.appendChild(listItem);
  });

  avoidFoodsSection.appendChild(avoidFoodsTitle);
  avoidFoodsSection.appendChild(avoidFoodsList);
  foodsContainer.appendChild(avoidFoodsSection);
}

// Call the function to display guinea pig foods information
displayGuineaPigFoodsInfo();
