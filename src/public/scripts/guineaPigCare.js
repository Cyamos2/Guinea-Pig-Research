// guineaPigCare.js
console.log("Guinea Pig Care JavaScript loaded!");

document.addEventListener("DOMContentLoaded", () => {
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
});

