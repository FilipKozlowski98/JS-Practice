const nextButton = document.querySelector(".nextButton");
const infoWrapper = document.querySelector(".infoWrapper");
const nameWrapper = document.querySelector(".nameWrapper");
const climateWrapper = document.querySelector(".climateWrapper");
const populationWrapper = document.querySelector(".populationWrapper");

const randomizeNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
};

const displayInfo = (info) => {
  const planetName = document.createElement("span");
  planetName.innerHTML = info.name;
  nameWrapper.appendChild(planetName);

  const planetClimate = document.createElement("span");
  planetClimate.innerHTML = info.climate;
  climateWrapper.appendChild(planetClimate);

  const planetPopulation = document.createElement("span");
  planetPopulation.innerHTML = info.population;
  populationWrapper.appendChild(planetPopulation);
};

const clearDisplay = () => {
  if (nameWrapper.childNodes.length > 1) {
    nameWrapper.removeChild(nameWrapper.lastChild);
    climateWrapper.removeChild(climateWrapper.lastChild);
    populationWrapper.removeChild(populationWrapper.lastChild);
  }
};

// const fetchData = () => {
//   const planetNumber = randomizeNumber(1, 60);
//   clearDisplay();
//   fetch(`https://swapi.dev/api/planets/${planetNumber}`)
//     .then((response) => response.json())
//     .then((data) => {
//       displayInfo(data);
//     });
// };

const fetchData = async () => {
  const planetNumber = randomizeNumber(1, 60);
  clearDisplay();
  try {
    let response = await fetch(`https://swapi.dev/api/planets/${planetNumber}`);
    let data = await response.json();
    displayInfo(data);
  } catch {
    console.log("error ocurred");
  }
};

nextButton.addEventListener("click", fetchData);
