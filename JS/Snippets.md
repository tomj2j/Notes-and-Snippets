// Console log the text content of the element with the class "message"
console.log(document.querySelector('.message').textContent);

// Manipulate text Content of elemts with following classes
document.querySelector('.message').textContent = '🥳 Correct Number! 🎉';
document.querySelector('.number').textContent = '23';
document.querySelector('.score').textContent = '999';
document.querySelector('.highscore').textContent = '1337';

// Select the Value of an input field. Value will be a string!!
document.querySelector('.guess').value = '00';
\*/

// Click function, select the input field with the class "guess" when the button with the class "check" is clicked.
document.querySelector('.check').addEventListener('click', function () {
console.log(document.querySelector('.guess').value);
