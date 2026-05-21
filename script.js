document.addEventListener('DOMContentLoaded', () => {

    const questions = [
    { 
        question: "What is the capital of Nebraska?",
        options: ["Lincoln", "Omaha", "Austin", "Denver"],
        answer: "Lincoln"
     },
     { 
        question: "Who fought in the battle that was later commemorated on 'Cinco De Mayo'?,}
        options: ["Mexico vs. Spain", "Mexico vs. France", "Mexico vs. USA", "Mexico vs. Germany"],
        answer: "Mexico vs. France"
     },
        { 
            question: "Fill in the blank: A spiral is a ______ ",
            options: ["Spiral", "Broken circle", "Never-ending curved object", "Line"],
            answer: "Line"
        }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score-container');
const scoreText =  document.getElementById('score');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    let currentQ = quizData[currentQuestion];
    
}
})

