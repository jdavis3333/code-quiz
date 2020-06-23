var highScores = document.getElementById("View High Scores")
var timeEl = document.getElementById("Timer")
var getStarted = document.getElementById("start")




//Quiz Questions

var myQuestions = [
    new question("Who invented JavaScript?", ["Douglas Crockford", "Sheryl Sandberg", "Brenden Eich", "Jerome Chenette"], "Brenden Eich"),
    new question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All"),
    new question("Who invented JQuery?", ["John Resig", "Timmy Willison", "Bill Gates", "Jeff Bezos"], "John Resig"),


   
]


