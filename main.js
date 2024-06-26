
document.addEventListener('DOMContentLoaded', () => {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const reset = document.getElementById('resetButton'); 
    const answerInput = document.getElementById('answer');
    const checkAnswerButton = document.getElementById('checkAnswer');
    const result = document.getElementById('result');

    
    // - New calc features
    const number3 = document.getElementById('number3');
    const inputTwo = document.getElementById('inputTwo');
    const calcButton = document.getElementById('newCalc');
    const newResult = document.getElementById('newResult');

    
    
    // - Function to generate random numbers
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

    function newAnswer(){
        const num3 = parseInt(number3.textContent);
        const newNum = parseInt(inputTwo.textContent);
        const appendResult = num3 + newNum; 
        result.textContent = `Correct + ${appendResult}`; 
    }


    function resetGame () {
        answerInput.value = '';
        result.textContent = '';
        setNewProblem(); 
    }

    checkAnswerButton.addEventListener('click', checkAnswer);
    setNewProblem();
    calcButton.addEventListener('click', newAnswer);
    reset.addEventListener('click', resetGame);
});


/*
Step 1: enter answer
Step 2: Click Check Answer
Step 3: send number of 'answer' to span id="number3"
Step 4: add another number to inputTwo
Step 5: click Calculate New button
Step 6: append the new calculation to the end of 'result'

*/ 