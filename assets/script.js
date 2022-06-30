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
console.log(questions[2].answers[2])

// currentQuestion = 0
var timeLeft
var score
var btn1 = querySelector("#btn-1")

function init() {
    getScores();
  }

function startQuiz {
    startButton.addEventListener("click", startQuiz);

    startTimer()
}
    // triggered event listener on start game button
    // setup 1st question
    // loadQuestion()

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
}

    // setInterval()
    // render to page

// loadQuestion
    // currentQuestion++
    //render the question and multipe choices to the page
    // btn1.textContent =

function checkAnswer(answer) {
    
}
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
