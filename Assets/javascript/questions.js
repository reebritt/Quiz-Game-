var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var totalTime = 91;
function newQuiz() {
  questionIndex = 0;
  totalTime = 90;
  timeLeft.textContent = totalTime;
  initialInput.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function () {
    totalTime--;
    timeLeft.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (questionIndex < questions.length - 1) {
        gameOver();
      }
    }
  }, 1000);

  showQuiz();
};

var questions = [
  {
    question: "The album Songs in A Minor was recorded by what artist?",
    choices: ["Beyonce", "Alicia Keys", "Brandy", "Rihanna"],
    // answer should have matching string from choices 
    answer: "Alicia Keys"

  },

  {
    question: "Which artist remade Roberta Flack's Killing Me Softly?",
    choices: ["Jennifer Hudson", "Beyonce", "Lauren Hill", "Ashanti"],
    // answer should have matching string from choices 
    answer: "Lauren Hill"

  },

  {
    question: "Which Michael Jackson Albumn was his best selling albumn?",
    choices: ["Thriller", "Beat It", "Off the Wall", "Bad"],
    // answer should have matching string from choices 
    answer: "Thriller"

  },

  {
    question: "Which groups hit song was No Scrubs",
    choices: ["Destiny's Child", "SWV", "TLC", "En Vogue"],
    // answer should have matching string from choices 
    answer: "TLC"

  },

  {
    question: "Which group was Jeffrey Osbourne the Lead singer of?",
    choices: ["O'jays", "Commodores", "Isley Brothers", "LTD"],
    // answer should have matching string from choices 
    answer: "LTD"

  },


  {
    question: "What state was mentioned in Glady's Knight's hit song - Midnight Train to Georgia?",
    choices: ["Tennessee", "Georgia", "Mississippi", "New York"],
    // answer should have matching string from choices 
    answer: "Georgia"

  },
];


var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var quizArea = document.getElementById("quizArea");

var correctAns = 0;
var questionNum = 0;
// var scoreResult;
var questionIndex = 0;


function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {

  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
      correctAns++;
       answerCheck.textContent = "Correct!";
  } else {
     totalTime -= 10;
    timeLeft.textContent = totalTime;
    answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
  }

  questionIndex++;
  if (questionIndex < questions.length) {
    nextQuestion();
  } else {
    gameOver();
  }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";
  finalScore.textContent = correctAns;
}

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

function saveHighScore(){
  var initials = initialInput.value.trim();
  if (initials !== "") {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    var newScore = {
      score: correctAns,
      initials: initials
    };
    console.log(newScore)
    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
  //  window.location.href = "highscores.html";
  document.getElementById("highScoreSection").innerHTML=localStorage.getItem("highScores");
  }
}
 submitInitialBtn.onclick=saveHighScore

 // Need to add function for high scores and return the high scores to the high scores page 

 
