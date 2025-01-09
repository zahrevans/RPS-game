const button = document.querySelector('button');

// Add an event listener to the button that listens for the click event
button.addEventListener('click', function () {
    // Display the prompt when the button is clicked
    const userInput = prompt('What is you name?');

    // Do something with the user input (e.g., display it in an alert)
    if (userInput) {
        alert('Let\'s Play, ' + userInput);
    }
});