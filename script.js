document.addEventListener('DOMContentLoaded', () => {

    const questions = [
    { 
        question: "What is the capital of Nebraska?",
        options: ["Lincoln", "Omaha", "Austin", "Denver"],
        answer: 0
     },
     { 
        question: "Who fought in the battle that was later commemorated on 'Cinco De Mayo'?",
        options: ["Mexico vs. Spain", "Mexico vs. France", "Mexico vs. USA", "Mexico vs. Germany"],
        answer: 1
     },
        { 
            question: "Fill in the blank with the most correct answer: A spiral is a ______ ",
            options: ["Spiral", "Broken circle", "Never-ending curved object", "Line"],
            answer: 3
        }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score-container');
const scoreText =  document.getElementById('score');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    let currentQ = questions[currentQuestion];
    questionContainer.textContent = currentQ.question;
    optionsContainer.textContent = '';
    currentQ.options.forEach((question, number) => { 
        let createButton = document.createElement('button')
        createButton.textContent = question
        createButton.addEventListener('click', () => { 
        selectOption(number)
    })
    optionsContainer.appendChild(createButton)
    })
    nextButton.disabled = true
}

function selectOption(number) {
    let currentQ = questions[currentQuestion];
    let optionButtons = optionsContainer.querySelectorAll('button')
    optionButtons.forEach((answerOption) => {
        answerOption.disabled = true
    })
    if (number === currentQ.answer) {
        score++;
        optionButtons[number].classList.add('correct')
    } 
    
    else {
        optionButtons[number].classList.add('incorrect')
    }
    nextButton.disabled = false
    }

    function showScore() {
        quizContainer.classList.add('hidden')
        scoreContainer.classList.remove('hidden')
        scoreText.innerHTML = 'Congratulations! Your Quiz is Complete.' + '<br> <br>' + 'Final Score: <strong>' + score + ' out of ' + questions.length + '</strong> <br> <br>' + '</strong> <strong style="font-size: 24px;">' + Math.round((score / questions.length) * 100) + '%</strong>'
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        }
        else {
            showScore();
        }
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        quizContainer.classList.remove('hidden');
        scoreContainer.classList.add('hidden');
        loadQuestion();
    }

    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);

    loadQuestion();

});
