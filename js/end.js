const username = document.querySelector('#username')
const saveScorebtn = document.querySelector('#saveScorebtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('#mostRecentScore')

// analyze data in local storage and get them
const highScores = JSON.parse(localStorage.getItem)('highschores') || []

const MAX_SCORES = 5

finalScore.innerText = mostRecentScore

// when button is pressed, will reenable save button
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

// won't refresh and mess up input
saveHighScore = e => {
    e.preventDefault ()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    // stores the high score and turns into readable string
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}