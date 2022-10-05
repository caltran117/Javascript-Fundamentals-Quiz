// unchanging variable const which selects for the given html id/class
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// creation of block scoped let instead of var function scoped
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionsCounter = 0
let availableQuestions = []

// input of questions to equal questions
let questions = [
    { 
    question: "Commonly used data types Do not include:",
    choice1: "strings",
    choice2: "boolens",
    choice3: "alerts",
    choice4: "numbers",
    answer: 3,
    }, 
    {  
    question: 'The condition in a if/else statement is enclosed with________.',
    choice1: 'quotes',
    choice2: 'curly brackets',
    choice3: 'parenthesis',
    choice4: 'square brackets',
    answer: 2,
    },
    { 
    question: "arrays in Javascript can be used to store ________.",
    choice1: 'numbers & strings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all of the above',
    answer: '1'
    },
    { 
    question: "string values must be enclosed within_______when being assigned to variables.", 
    choice1: 'commas',
    choice2: 'curly brackets',
    choice3: 'quotes',
    choice4: 'parenthesis',
    answer: '4'
    },
    { 
    question: "a very useful tool during development and debugging is:",
    choice1: 'Javascript',
    choice2: 'terminal/bash',
    choice3: 'for loops',
    choice4: 'console.log',
    answer: 4,
    },

]

// constant for points and max questions, will not change
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

// other way to add a function, elements for starting the game
startGame = () => {
    questionsCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

// function to get knew questions
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


incrementScore = num => {
    score +=num
    scoreText.innertext = score
}

startGame()