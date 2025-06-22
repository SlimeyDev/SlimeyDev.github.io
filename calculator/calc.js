const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
    if (display.value.length > 10) {
        display.value = display.value.slice(0, 10);
    }
    if (display.value === '0') {
        display.value = input;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
    display.value = eval(display.value);
    } 
    catch (error) {
        display.value = 'Error';
    }
}