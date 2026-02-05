// Find knappen og output-feltet i DOM'en
const button = document.getElementById('myButton');
const output = document.getElementById('output');

// Klik event
button.addEventListener('click', () => {
    output.textContent = 'Du har aktiveret JavaScript!';
    output.style.color = 'black';
    console.log('Knappen blev klikket!');
});

// Mouse Enter event (når musen kører over knappen)
button.addEventListener('mouseenter', () => {
    output.textContent = 'Musen er over knappen!';
    output.style.color = 'orange';
    console.log('Mouse Enter');
});

// Mouse Leave event (når musen forlader knappen)
button.addEventListener('mouseleave', () => {
    output.textContent = 'Musen har forladt knappen.';
    output.style.color = 'gray';
    console.log('Mouse Leave');
});