// var timer;
// var timerCount;
// var timeLeft;
var sec = 60
// var btn1 = document.querySelector("#btn1");
// var btn2 = document.querySelector("#btn2");
// var btn3 = document.querySelector("#btn3");
// var btn4 = document.querySelector("#btn4");

// // var restartBtn = document.querySelector('restart'); 
// // var prevBtn = document.querySelector('prev'); 
// // var nextBtn = document.querySelector('next'); 
// // var submitBtn = document.querySelector('submit'); 
// // var trueBtn = document.querySelector('True'); 
// // var falseBtn = document.querySelectord( 'False'); 
// // var userScore = document.querySelector('user-score'); 
// // var questionText = document.querySelector( 'question-text');

// var currentQuestion = 0;
// var score = 0;
var questions = [
    {
        question: "What is 2*5?",
        answers: [2, 5, 10, 15, 20],
        correctAnswer: 2
      }, {
        question: "What is 3*6?",
        answers: [3, 6, 9, 12, 18],
        correctAnswer: 4
      }, {
        question: "What is 8*9?",
        answers: [72, 99, 108, 134, 156],
        correctAnswer: 0
      }
];
var currentQuestion = 0
var selections = [],
var quiz = $('#quiz')

nextBtn.addEventListener("click", next)
submitBtn.addEventListener("click", submit)

function init() {
     getScores();
     }

function startQuiz() {
    startButton.addEventListener("click", startQuiz);
    timerCount = 40;
    renderQuiz()
    startTimer()
}

function renderQuiz(){
    currentQuestion = 0
    questionText.innerHTML = questions[currentQuestion].question;
    btn1.innerHTML = questions[currentQuestion].answers[0].option;
    btn1.onclick = () => {
        var userInput = 0;
        if (questions[currentQuestion].answers(userInput).answer){
            if (score<3){
                score++;
            }
            userScore.innerHTML = score;
            if(currentQuestion<2){
                next();
            }
        }
    btn2.innerHTML = questions[currentQuestion].answers[1].option;
    btn2.onclick = () => {
            var userInput = 0;
            if (questions[currentQuestion].answers(userInput).answer){
                if (score<3){
                    score++;
                }
                userScore.innerHTML = score;
                if(currentQuestion<2){
                    next();
                }
            }
    btn3.innerHTML = questions[currentQuestion].answers[2].option;
    btn3.onclick = () => {
                var userInput = 0;
                if (questions[currentQuestion].answers(userInput).answer){
                    if (score<3){
                            score++;
                        }
                userScore.innerHTML = score;
                if(currentQuestion<2){
                        next();
                        }
                    }
        btn4.innerHTML = questions[currentQuestion].answers[3].option;
        btn4.onclick = () => {
                var userInput = 0;
                if (questions[currentQuestion].answers(userInput).answer){
                    if (score<3){
                        score++;
                            }
                userScore.innerHTML = score;
                if(currentQuestion<2){
                    next();
                        }
        }
    }
}}}

function
 
    // checkButton.addEventListener("click", showResults)

}
(function() {
    var sec = 60;
    function startTimer(){
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='Time remaining: '+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time's up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 15;
        document.getElementById('timerDisplay').innerHTML='Time remaining: '+sec;
    });
    startTimer();
})();

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
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    };
    // prompt to play again?

    resetButton.addEventListener("click", resetQuiz);