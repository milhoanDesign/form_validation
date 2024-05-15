document.addEventListener('DOMContentLoaded', () => {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const reset = document.getElementById('resetButton'); 
    const answerInput = document.getElementById('answer');
    const checkAnswerButton = document.getElementById('checkAnswer');
    const result = document.getElementById('result');

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
    }

    function checkAnswer() {
        const num1 = parseInt(number1.textContent);
        const num2 = parseInt(number2.textContent);
        const userAnswer = parseInt(answerInput.value);
        if (userAnswer === num1 + num2) {
            result.textContent = 'Correct!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Incorrect, try again.';
            result.style.color = 'red';
        }
    }

    function resetGame () {
        answerInput.value = '';
        result.textContent = '';
        setNewProblem(); 
    }

    checkAnswerButton.addEventListener('click', checkAnswer);
    setNewProblem();
    reset.addEventListener('click', resetGame);
});
