document.addEventListener('DOMContentLoaded', () => {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const reset = document.getElementById('resetButton'); 
    const answerInput = document.getElementById('answer');
    const checkAnswerButton = document.getElementById('checkAnswer');
    const result = document.getElementById('result');

    // New calc features
    const number3 = document.getElementById('number3');
    const inputTwo = document.getElementById('inputTwo');
    const calcButton = document.getElementById('newCalc');
    const newResult = document.getElementById('newResult');

    // Function to generate random numbers
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    }

    function setNewProblem() {
        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();
        number1.textContent = num1;
        number2.textContent = num2;
        answerInput.value = '';
        result.textContent = '';
        number3.textContent = ''; // Clear previous value
        inputTwo.value = ''; // Clear previous value
        newResult.textContent = ''; // Clear previous value
    }

    function checkAnswer() {
        const num1 = parseInt(number1.textContent);
        const num2 = parseInt(number2.textContent);
        const userAnswer = parseInt(answerInput.value);
        const answerMove = parseInt(answerInput.value);
    
        if (userAnswer === num1 + num2) {
            result.textContent = 'Correct!';
            result.style.color = 'green';
            number3.textContent = answerMove; // Send the answer to number3
        } else {
            result.textContent = 'Incorrect, try again.';
            result.style.color = 'red';
        }
    }

    function newAnswer(){
        const newNum = parseInt(inputTwo.textContent); // Change from textContent to value
        const number4 = parseInt(number3.textContent);
        const appendResult = number4 + newNum; 
        newResult.textContent = `New Result: ${appendResult}`; // Append result to newResult
    }

    function resetGame() {
        answerInput.value = '';
        result.textContent = '';
        setNewProblem(); 
    }

    checkAnswerButton.addEventListener('click', checkAnswer);
    calcButton.addEventListener('click', newAnswer);
    reset.addEventListener('click', resetGame);
    setNewProblem(); // Initialize the problem when the page loads
});
