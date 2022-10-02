// function startQuiz (){
//     console.log("startquiz")
// }

    // function used to organize click or button related element

function clicks (){
    //  start button
  var startquizbutton = document.querySelector("#button");
  startquizbutton.addEventListener("click", function(hidebutton) {
    console.log("test")
    // button disapears, 
    startquizbutton.style.visibility = 'hidden';
  // quiz starts-- see first questions & answers, 

  // timer starts, 
  // clicks an a answer/button then goes to next
  // end of 5 questions highscore after submit chart will appear
    });
}
// calls on the function clicks, the key to the matrix portal
clicks ();

// storing questions & answers
// 5 questions that will appear with answers
function QuestionsAnswers()
{
var Questions = 
[
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
]}

// storing scores 
// highscore chart ranks scores for high to low
// scores of each question is kept tracked of
function scores(){
  
}
 