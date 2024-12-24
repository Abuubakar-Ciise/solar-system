const planetsDropdown = document.getElementById('planets');
const flexItem = document.querySelector('.description');
const image = document.querySelector('.image');
const img = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');
const content = document.createElement('div');
const circle = document.createElement('div');

circle.className = 'circle';
content.className = 'content';
content.style.display = 'none'
flexItem.appendChild(content);
flexItem.appendChild(circle);

const planets = [
    {name: "Earth", value: "earth", gravity: 9.81},
    {name: "Jupiter", value: "jupiter", gravity: 24.79},
    {name: "Mars", value: "mars", gravity: 3.71},
    {name: "Mercury", value: "mercury", gravity: 3.7},
    {name: "Moon", value: "moon", gravity: 1.625},
    {name: "Neptune", value: "neptune", gravity: 11.15},
    {name: "Saturn", value: "saturn", gravity: 10.44},
    {name: "Pluto", value: "pluto", gravity: 0.62},
    {name: "Venus", value: "venus", gravity: 8.87},
    {name: "Uranus", value: "uranus", gravity: 8.69}
];

planets.forEach(planet => {
    const option = document.createElement('option');
    option.value = planet.value;
    option.textContent = planet.name;
    planetsDropdown.appendChild(option);
});

function clearDisplay() {
    img.src = ''; 
    circle.textContent = '';
    content.textContent = '';
    content.style.color = 'white'; 
    circle.style.display = 'none'; 
}
function displayError(message) {
    clearDisplay();
    content.textContent = message;
     content.style.display = 'block'
}

function displayResult(planet, inputValue) {
    const selectedPlanet = planets.find(p => p.value === planet);  
    const weight = inputValue * selectedPlanet.gravity;  
    img.src = `./images/${planet}.png`;
    circle.textContent = `${weight.toFixed(2)} N`;  
    circle.style.color = 'white';
    content.style.color = 'white';
    content.textContent = `The weight of the object on ${selectedPlanet.name}`;
    content.style.display = 'block'
    circle.style.display = 'block'; 
}

function validateInput(inputValue) {
    if (inputValue === '') {
        displayError('Mass is required');
        return false;
    } else if (isNaN(inputValue)) {
        displayError('Invalid input! Please enter a valid number.');
        return false;
    } else if (parseInt(inputValue) < 0) {
        displayError('Please enter a non-negative number');
        return false;
    } else if (planetsDropdown.value === 'none') {
        displayError('You did not choose a planet yet');
        return false;
    }
    return true;
}

button.addEventListener('click', () => {
    const inputValue = parseFloat(input.value.trim()); 
    if (validateInput(inputValue)) {
        displayResult(planetsDropdown.value, inputValue);
    }
    console.log(inputValue);
});
