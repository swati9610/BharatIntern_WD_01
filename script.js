// Get DOM elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert-btn');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to update Fahrenheit input
function updateFahrenheit() {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
}

// Event listener for the convert button
convertButton.addEventListener('click', updateFahrenheit);

// Event listener for the Enter key in Celsius input
celsiusInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        updateFahrenheit();
    }
});