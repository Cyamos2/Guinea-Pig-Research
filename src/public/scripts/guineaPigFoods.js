// guineaPigFoods.js

document.addEventListener('DOMContentLoaded', function () {
    // Foods guinea pigs can eat
    const canEatList = document.getElementById('canEatList');
    const canEatFoods = [
      'Fresh hay',
      'Fresh vegetables (e.g., bell peppers, carrots, kale)',
      'Guinea pig pellets',
      // Add more foods from the source
    ];
  
    canEatFoods.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = food;
      canEatList.appendChild(listItem);
    });
  
    // Foods guinea pigs cannot eat
    const cannotEatList = document.getElementById('cannotEatList');
    const cannotEatFoods = [
      'Chocolate',
      'Caffeine',
      'Onions',
      // Add more foods from the source
    ];
  
    cannotEatFoods.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = food;
      cannotEatList.appendChild(listItem);
    });
  });
  