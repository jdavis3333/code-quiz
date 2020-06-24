var highScores = document.getElementById("ViewHighScores")
var highScoresEl = document.getElementById("highScoresContainer")
var timeEl = document.querySelector(".time")
var getStarted = document.getElementById("start")
var mainEl  = document.getElementById("container")
var questionsEl = document.getElementById("questionsContainer")
var newQuestion = document.getElementById("newQuestion")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
var highScoreInitials = document.getElementById("initials")
var scoreSubmit = document.getElementById("scoreSubmit")
var secondsLeft = 60;
var score = 0;

var myQuestions = [
    {q: "Who invented JavaScript?", c: ["Douglas Crockford", "Sheryl Sandberg", "Brenden Eich", "Jerome Chenette"], a: "Brenden Eich"},
    {q: "Which language is used for styling web pages?", c: ["HTML", "JQuery", "CSS", "XML"], a:"CSS"},
    {q: "Which is not a JavaScript Framework?", c: ["Python Script", "JQuery","Django", "NodeJS"], a: "Django"},
    {q: "Which is used for Connect To Database?", c: ["PHP", "HTML", "JS", "All"], a: "PHP"},
    {q: "Webdevtrick.com is about..", c: ["Web Design", "Graphic Design", "SEO & Development", "All"], a: "All"},
    {q: "Who invented JQuery?", c: ["John Resig", "Timmy Willison", "Bill Gates", "Jeff Bezos"], a: "John Resig"},
]


getStarted.addEventListener("click", startGame()) 

//start game
function startGame() {
    //hide container div so questions can start to pop up in its place
    setTime();
    askQuestions();
}

//iterate through questions
function askQuestion () {
    for (var i = 0; i < myQuestions.length; i++) {
        //hide container
        //display question
        newQuestion.textContent = myQuestions[i].q;
        choice1.textContent = myQuestions[i].c[0];
        choice2.textContent = myQuestions[i].c[1];
        choice3.textContent = myQuestions[i].c[2];
        choice4.textContent = myQuestions[i].c[3];

        var answer = addEvenListener.onclick(myQuestions[i].c);

        //compare answer
        if(answer === myQuestions[i].a){
            score +=10;
        }
        else {
            secondsLeft -= 10000;
        }
    }
}
    

//Create timer countdown
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            localStorage.setItem("score", score);
            alert("Time's up!");
            highScorePage();
        }
    }, 1000)
}



// function askQuestions() {
//     mainEl.textContent = "";
//     var newQuestion = document.createElement("h3");
//     newQuestion.innerHTML(myQuestions[i]);
//     mainEl.appendChild(newQuestion)
//     var choice1 = document.createElement("button");
//     choice1.setAttribute("button", "")
// }

function highScorePage() {
    window.textContent = "";

    // document.getElementById("result").innerHTML = localStorage.getItem()
    var highScores = [];
    //create a new list item for each score
    // for (var i = 0; i < highScores.length; i++) {
    //     score = highScores[i] + scoreSubmit;
}



