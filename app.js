import isEven from './is-even.js';
function testNumber() {
    const numberInput = document.getElementById('number-input');
    const resultParagraph = document.getElementById('result');

    const number = parseInt(numberInput.value);
    
    const result = isEven(number);

    if(result === true) {
        resultParagraph.textCotnent = 'even';
    } else {
        resultParagraph.textContent = 'odd';
    }
}

window.testNumber = testNumber;