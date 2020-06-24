var highScores = document.getElementById("View High Scores")
var timeEl = document.querySelector(".time")
var getStarted = document.getElementById("start")
var mainEl  = document.getElementById("container")


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

//iterate through questions
for (var i = 0; i < myQuestions.length; i++) {
    //display question
    var answer = "onclick"(myQuestions[i].q);

    //compare answer
    if(answer === myQuestions[i].a){
        score++;
    }
    else {
        secondsLeft - 10000;
    }


}
getStarted.addEventListener('click', StartGame())

//Create timer countdown
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            // highScorePage();
        }
    }, 1000)
}

//start game
function startGame() {
    setTime();
    questions
}


