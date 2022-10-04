const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionsCounter = 0
let availableQuestions = []

let questions = [
    { 
    question1: 'Commonly used data types Do not include:',
    1: 'strings',
    2: 'boolens',
    3: 'alerts',
    4: 'numbers',
    answer: 3,
    }, 
    {  
    question2: 'The condition in a if/else statement is enclosed with________.',
    1: 'quotes',
    2: 'curly brackets',
    3: 'parenthesis',
    4: 'square brackets',
    answer: 2,
    },
    { 
    question3: "arrays in Javascript can be used to store ________.",
    1: 'numbers & strings',
    2: 'other arrays',
    3: 'booleans',
    4: 'all of the above',
    answer: '1'
    },
    { 
    question4: "string values must be enclosed within_______when being assigned to variables.", 
    1: 'commas',
    2: 'curly brackets',
    3: 'quotes',
    4: 'parenthesis',
    answer: '4'
    },
    { 
      question5: "a very useful tool during development and debugging is:",
      1: 'Javascript',
      2: 'terminal/bash',
      3: 'for loops',
      4: 'console.log',
      answer: 4,
    },

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionsCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionsCounter++
    progressText.innertext = `Questions ${questionsCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionsCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)  
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classlist.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classlist.remove(classToApply) 
            getNewQuestion()

        }, 1000)
    })
})