const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choicetext'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestions = {}

let acceptingAnswers = true
let score = 0
let questionsCounter = 0
let availableQuestions = []

let questions = [
    { question1: "Commonly used data types Do not include:",
Answers: 
{
  1: 'strings',
  2: 'boolens',
  3: 'alerts',
  4: 'numbers',
}, 
  correctAnswer: '3'
},
{ question2: "The condition in a if/else statement is enclosed with________.",
Answers: 
{
  1: 'quotes',
  2: 'curly brackets',
  3: 'parenthesis',
  4: 'square brackets',
},
  correctAnswer: '2'
},
{ question3: "arrays in Javascript can be used to store ________.",
Answers: 
{
  1: 'numbers & strings',
  2: 'other arrays',
  3: 'booleans',
  4: 'all of the above',
},
  correctAnswer: '1'
},
{ question4: "string values must be enclosed within_______when being assigned to variables.",
Answers: 
{
  1: 'commas',
  2: 'curly brackets',
  3: 'quotes',
  4: 'parenthesis',
},
  correctAnswer: '4'
},
{ question5: "a very useful tool during development and debugging is:",
Answers:
{
  1: 'Javascript',
  2: 'terminal/bash',
  3: 'for loops',
  4: 'console.log',
},
  correctAnswer: '4'

}

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = ()