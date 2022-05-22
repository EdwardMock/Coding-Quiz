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
        correctAnswers()
        inCorrectAnswers()
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
        correctAnswers()
        inCorrectAnswers()
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
        correctAnswers()
        inCorrectAnswers()
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
        correctAnswers()
        inCorrectAnswers()
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
        correctAnswers()
        inCorrectAnswers()
        return 
    } //Show question 5 and possible answers
}

//Correct Answer Logic
var correctAnswer1 = document.getElementById('answer3')
var correctAnswer2 = document.getElementById('answer2')
var correctAnswer3 = document.getElementById('answer4')
var correctAnswer4 = document.getElementById('answer3')
var correctAnswer5 = document.getElementById('answer4')
  
function correctAnswers() {
    if (questionText === 'Commonly used data types DO not include:') {
        $(answer3).on('click', function() {
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            addPoint() //Still need to create this function
            getQuestion()
        })   
    }
    else if (questionText === 'The condition in an if/else statement is enclosed with ____') {
        $(correctAnswer2).on('click', function(){
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            addPoint() //Still need to create this function
            getQuestion()
        })
    }
    else if (questionText === 'Arrays in JavaScript can be used to store ____.') {
        $(correctAnswer3).on('click', function(){
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            addPoint() //Still need to create this function
            getQuestion()
        })
    }
    else if (questionText === 'String value must be enclosed within ____ when being assigned to a variable') {
        $(correctAnswer4).on('click', function(){
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            addPoint() //Still need to create this function
            getQuestion()
        })
    }
    else if (questionText === 'A very useful tool used during development and debugging for printing content to the debugger is ____') {
        $(correctAnswer4).on('click', function(){
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            addPoint() //Still need to create this function
            getQuestion()
        })
    }
}

//Incorrect Answer Logic
var inCorrectAnswer1 = document.getElementById('') //Need to set incorrect answer options
var inCorrectAnswer2 = document.getElementById('')
var inCorrectAnswer3 = document.getElementById('')
var inCorrectAnswer4 = document.getElementById('')
var inCorrectAnswer5 = document.getElementById('')
  
function inCorrectAnswers() {
    if (questionText === 'Commonly used data types DO not include:') {
        $(answer3).on('click', function() { //Need to change query for incorrect buttons
            document.getElementById('correctincorrect').innerHTML = ('Incorrect!')
            console.log('Clicked Incorrect')
            removePoint() //Still need to create this function
            getQuestion()
        })   
    }
    else if (questionText === 'The condition in an if/else statement is enclosed with ____') {
        $(correctAnswer2).on('click', function(){ //Need to change query for incorrect buttons
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            removePoint() //Still need to create this function
            getQuestion()
        })
    }
    else if (questionText === 'Arrays in JavaScript can be used to store ____.') {
        $(correctAnswer3).on('click', function(){ //Need to change query for incorrect buttons
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            removePoint() //Still need to create this function
            getQuestion()
        })
    }
    else if (questionText === 'String value must be enclosed within ____ when being assigned to a variable') {
        $(correctAnswer4).on('click', function(){ //Need to change query for incorrect buttons
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            removePoint() //Still need to create this function
            getQuestion()
        })
    }
    else if (questionText === 'A very useful tool used during development and debugging for printing content to the debugger is ____') {
        $(correctAnswer4).on('click', function(){ //Need to change query for incorrect buttons
            document.getElementById('correctincorrect').innerHTML = ('Correct!')
            console.log('Clicked Correct')
            removePoint() //Still need to create this function
            getQuestion()
        })
    }
}

// Start Quiz Functions
$(startquiz).on('click', function() {
    console.log(startquiz, 'Clicked');
    getQuestion();
    
});