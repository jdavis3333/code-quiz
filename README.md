# code-quiz

The goal of this project was to create a quiz to allow students to compare their progress against their peers. In this timed quiz, incorrect answers would take time away from the user and correct answers would add to the user's point total. After the quiz, the user should be able to save his/her score along with initials to a high scores page.

## Getting Started

1. Log into GitLab > UCB-Coding-Bootcamp > UCB-BER-FSF-FT-06-2020-U-C
2. Navigate to Web APIs Homework (click) 
3. Open VS Code or similar program and follow provided instructions.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/

### Installing

* Creating a landing page with a get started button
```
<div id="container">
        <h1>Welcome to the coding quiz</h1>
        <p>
           Try to answer the following code-related questions within the time limit. Keep in mind an incorrect answer will take 10 seconds off your remaining time.
        </p>
        <button id="start">Get Started</button>
    </div>
```
* Created global variables to point to DOM elements and to track time and score
```
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
```
* Created questions, answer choices, and the correct answer to present to the user
```
var myQuestions = [
    {q: "Who invented JavaScript?", c: ["Douglas Crockford", "Sheryl Sandberg", "Brenden Eich", "Jerome Chenette"], a: "Brenden Eich"},
    {q: "Which language is used for styling web pages?", c: ["HTML", "JQuery", "CSS", "XML"], a:"CSS"},
    {q: "Which is not a JavaScript Framework?", c: ["Python Script", "JQuery","Django", "NodeJS"], a: "Django"},
    {q: "Which is used for Connect To Database?", c: ["PHP", "HTML", "JS", "All"], a: "PHP"},
    {q: "Webdevtrick.com is about..", c: ["Web Design", "Graphic Design", "SEO & Development", "All"], a: "All"},
    {q: "Who invented JQuery?", c: ["John Resig", "Timmy Willison", "Bill Gates", "Jeff Bezos"], a: "John Resig"},
]
```
* Created a countdown timer for use during game play
```
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
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://jdavis3333.github.io/code-quiz/)


## Authors

* Joe Davis

- [Link to Github](https://github.com/jdavis3333)
- [Link to LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to anyone whose code, libraries, packages, or UI was used  / inspired from
* Inspiration
* etc
