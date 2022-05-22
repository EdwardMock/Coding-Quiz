var questionsSelection = [
    'Commonly used data types DO not include:', 
    'The condition in an if/else statement is enclosed with ____', 
    'Arrays in JavaScript can be used to store ____.', 
    'String value must be enclosed within ____ when being assigned to a variable', 
    'A very useful tool used during development and debugging for printing content to the debugger is ____' ];

var score = 0;
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;

//Random Question Generation
function getQuestion() {
    var firstQuestion = Math.floor(Math.random(0,5) * 5); //Get random question
    var secondQuestion = Math.floor(Math.random(0,5) * 5);
    var thirdQuestion = Math.floor(Math.random(0,5)* 5);
    var fourthQuestion = Math.floor(Math.random(0,5)* 5);
    var fifthQuestion = Math.floor(Math.random(0,5)* 5);
    
    
    if (firstQuestion === 0) {
        questionText = 'Commonly used data types DO not include:';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = ('1. Strings');
        document.getElementById ('answer2').innerHTML = ('2. Booleans');
        document.getElementById ('answer3').innerHTML = ('3. Alerts');
        document.getElementById ('answer4').innerHTML = ('4. Numbers');
        return
    }//Show question 1 and possible answers
    
    else if (secondQuestion === 1) {
        questionText = 'The condition in an if/else statement is enclosed with ____';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = ('1. Quotes');
        document.getElementById ('answer2').innerHTML = ('2. Curly Brackets');
        document.getElementById ('answer3').innerHTML = ('3. Parenthesis');
        document.getElementById ('answer4').innerHTML = ('4. Square Brackets');
        return
    }  //Show question 2 and possible answers

    else if (thirdQuestion === 2) { 
        questionText = 'Arrays in JavaScript can be used to store ____.';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = ('1. Numbers and Strings');
        document.getElementById ('answer2').innerHTML = ('2. Other Arrays');
        document.getElementById ('answer3').innerHTML = ('3. Booleans');
        document.getElementById ('answer4').innerHTML = ('4. All Of The Above');
        return 
    } //Show question 3 and possible answers
    
    else if (fourthQuestion === 3) {
        questionText = 'String value must be enclosed within ____ when being assigned to a variable';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = ('1. Commas');
        document.getElementById ('answer2').innerHTML = ('2. Curly Brackets');
        document.getElementById ('answer3').innerHTML = ('3. Quotes');
        document.getElementById ('answer4').innerHTML = ('4. Parenthesis');
        return 
    } //Show question 4 and possible answers

    else if (fifthQuestion === 4); {
        questionText = 'A very useful tool used during development and debugging for printing content to the debugger is ____';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = ('1. JavaScript');
        document.getElementById ('answer2').innerHTML = ('2. Terminal/Bash');
        document.getElementById ('answer3').innerHTML = ('3. For Loops');
        document.getElementById ('answer4').innerHTML = ('4. Console.Log');
        return 
    } //Show question 5 and possible answers
}

$(startquiz).on('click', function() {
    console.log(startquiz, 'Clicked');
    getQuestion();
    var questionText = document.getElementById("questions.question");
});