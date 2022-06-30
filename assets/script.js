var questions = [
    {
        question: "blah blah?",
        answers: [bloo, blorp, blap],
        correctAnswer: "bloo",
    },
    {
        question: "blah blor?",
        answers: [bloo, blorp, blap],
        correctAnswer: "blorp",
    },
    {
        question: "blor blah?",
        answers: [bloo, blorp, blap],
        correctAnswer: "blap",
    }
]

var timer;
var timerCount;
var timeLeft;
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
// // currentQuestion = 0
// var score

// function init() {
//     getScores();
//   }

function startQuiz() {
    startButton.addEventListener("click", startQuiz);
    timerCount = 40;
    startButton.disabled = true;
    renderQuiz()
    startTimer()
}

function renderQuiz(questions, quizContainer, resultsContainer, checkButton){
    function loadQuestion (questions, quizContainer){

    }
    function showResults(questions, quizContainer, resultsContainer){

    }
    loadQuestion(questions, quizContainer)
    checkButton.addEventListener("click", showResults)

}

function startTimer (){
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >=0){
            if (isPass && timerCount > 0) {
        clearInterval(timer);
        passQuiz();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      failQuiz();
    }
  }, 1000);
  // render to page?
}
    
function loadQuestion () {}
    // currentQuestion++
    //render the question and multipe choices to the page
    // btn1.textContent =

function checkAnswer() {}
    // check which button user clicked
    // compare the choice with correct answer
    // act on right/wrong answer
    // loadQuestion()

// endGame
    // called at end of timer or when current question > # of question
    // cancel timer
    // prompt for user initials
    // local storage
        // 1. read ls and store in js variable
        // 2. check if null
        // 3. update js variable with our new score
        // 4. render to page
        // 5. save updated js variable to ls
    // make highscores visible
    // prompt to play again?

    resetButton.addEventListener("click", resetQuiz);