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

$(startquiz).on('click', function(getquestion)