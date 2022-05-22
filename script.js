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
        document.getElementById ('answer1').innerHTML = (questionOneAnswers.indexOf(0));
        document.getElementById ('answer2').innerHTML = (questionOneAnswers.indexOf(1));
        document.getElementById ('answer3').innerHTML = (questionOneAnswers.indexOf(2));
        document.getElementById ('answer4').innerHTML = (questionOneAnswers.indexOf(3));
        return
    }//Show question 1 and possible answers
    
    else if (secondQuestion === 1) {
        questionText = 'The condition in an if/else statement is enclosed with ____';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = (questionTwoAnswers.indexOf(0));
        document.getElementById ('answer2').innerHTML = (questionTwoAnswers.indexOf(1));
        document.getElementById ('answer3').innerHTML = (questionTwoAnswers.indexOf(2));
        document.getElementById ('answer4').innerHTML = (questionTwoAnswers.indexOf(3));
        return
    }  //Show question 2 and possible answers

    else if (thirdQuestion === 2) { 
        questionText = 'Arrays in JavaScript can be used to store ____.';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = (questionThreeAnswers.indexOf(0));
        document.getElementById ('answer2').innerHTML = (questionThreeAnswers.indexOf(1));
        document.getElementById ('answer3').innerHTML = (questionThreeAnswers.indexOf(2));
        document.getElementById ('answer4').innerHTML = (questionThreeAnswers.indexOf(3));
        return 
    } //Show question 3
    else if (fourthQuestion === 3) {
        questionText = 'String value must be enclosed within ____ when being assigned to a variable';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = (questionFourAnswers.indexOf(0));
        document.getElementById ('answer2').innerHTML = (questionFourAnswers.indexOf(0));
        document.getElementById ('answer3').innerHTML = (questionFourAnswers.indexOf(0));
        document.getElementById ('answer4').innerHTML = (questionFourAnswers.indexOf(0));
        return 
    } //Show question 4 and possible answers

    else if (fifthQuestion === 4); {
        questionText = 'A very useful tool used during development and debugging for printing content to the debugger is ____';
        console.log(questionText);
        document.getElementById ('questions.question').innerHTML = questionText;
        document.getElementById ('answer1').innerHTML = (questionFiveAnswers.indexOf(0));
        document.getElementById ('answer2').innerHTML = (questionFiveAnswers.indexOf(0));
        document.getElementById ('answer3').innerHTML = (questionFiveAnswers.indexOf(0));
        document.getElementById ('answer4').innerHTML = (questionFiveAnswers.indexOf(0));
        return 
    } //Show question 5 and possible answers
}

$(startquiz).on('click', function() {
    console.log(startquiz, 'Clicked');
    getQuestion();
    var questionText = document.getElementById("questions.question");
    questionText.insertAdjacentHTML('beforeEnd', (questionText));
    
});