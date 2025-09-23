const container = document.querySelector('.container');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Event listener for container
container.addEventListener('click', (event) => {
    console.log('Container clicked');
    console.log('Event target:', event.target);
});

// Event listener for parent
parent.addEventListener('click', (event) => {
    console.log('Parent clicked');
    console.log('Event target:', event.target);
});

// Event listener for child
child.addEventListener('click', (event) => {
    console.log('Child clicked');
    console.log('Event target:', event.target);
});