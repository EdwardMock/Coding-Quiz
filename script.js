var questionsSelection = [
    'Commonly used data types DO not include:', 
    'The condition in an if/else statement is enclosed with ____', 
    'Arrays in JavaScript can be used to store ____.', 
    'String value must be enclosed within ____ when being assigned to a variable', 
    'A very useful tool used during development and debugging for printing content to the debugger is ____' ];

var questionOneAnswers = ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'];
var questionTwoAnswers = ['1. Quotes', '2. Curly Brackets', '3. Parenthesis', '4. Square Brackets'];
var questionThreeAnswers = ['1. Numbers and Strings', '2. Other Arrays', '3. Booleans', '4. All Of The Above'];
var questionFourAnswers = ['1. Commas', '2. Curly Brackets', '3. Quotes', '4. Parenthesis'];
var questionFiveAnswers = ['1. JavaScript', '2. Terminal/Bash', '3. For Loops', '4. Console.Log'];

var score = 0;
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;

$(startquiz).on('click', function() {
    getQuestion();
    var questionText = document.getElementById("questions.question");
    questionText.insertAdjacentHTML('beforeEnd', (questionText));

});


function getQuestion() {
    var firstQuestion = Math.floor(Math.random() * questionsSelection.length); //Get random question
    var secondQuestion = Math.floor(Math.random() * questionsSelection.length);
    var thirdQuestion = Math.floor(Math.random()* questionsSelection.length);
    var fourthQuestion = Math.floor(Math.random()* questionsSelection.length);
    var fifthQuestion = Math.floor(Math.random()* questionsSelection.length);
    
    
    if (firstQuestion === 0) {
        questionText = 'Commonly used data types DO not include:';
        console.log(questionText);
        return
    }//Show question 1
    
    else if (secondQuestion === 1) {
        questionText = 'The condition in an if/else statement is enclosed with ____';

        console.log(questionText);
        return
    }  //Show question 2

    else if (thirdQuestion === 2) { 
        questionText = 'Arrays in JavaScript can be used to store ____.';
        console.log(questionText);
        return 
    } //Show question 3
    else if (fourthQuestion === 3) {
        questionText = 'String value must be enclosed within ____ when being assigned to a variable';
        console.log(questionText);
        return 
    } //Show question 4

    else if (fifthQuestion === 4); {
        questionText = 'A very useful tool used during development and debugging for printing content to the debugger is ____';
        console.log(questionText);
        return 
    } //Show question 5
}