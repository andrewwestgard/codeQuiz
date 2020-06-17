// TODO: TIMER
    //VARIABLES
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const mainContent = document.getElementById('main-content');
    const wrapper = document.getElementById('wrapper')
    const options = document.getElementById('options')
    const questionDisplay = document.getElementById('question-display');
    const buttonA = document.getElementById('answerButtonA')
    let correctAnswers = 0;
    const nextButton = document.getElementById('next')
    const wrapper2 = document.getElementById('wrapper-2')
    const buttonB2 = document.getElementById('answerButtonB2')
    const buttonC3 = document.getElementById('answerButtonC3')
    const buttonA4 = document.getElementById('answerButtonA4')
    //variable containing an array with the various questions
    const myQuestion1 = [
        {
          question: "What is semantic HTML?",
          answers: {
            a: "Putting divs around everything",
            b: "Using modern HTML so that your code is accessable to everyone",
            c: "Does not exist"
          },
          correctAnswer: "b"
        },
        ];
    //FUNCTIONS
    //function that runs a 100 second timer
        //when the timer runs out alert "you ran out of time"
    //the function when the submit button is pressed
    submitButton.addEventListener('click', function() {
        //Function timer that counts down from 100
        var counter = 100;
        var quizCountdown = setInterval(function(){
        console.log(counter);
        counter--
        if (counter === 0) {
        console.log("You ran out of time!");
        alert("You ran out of time!")
        //makes sure that the counter ends at zero and does not go negative
        clearInterval(quizCountdown);
        } 
        }, 1000);
    })
    //Create a function that when the play button is pressed the main-content section hides and the first question appears
    submitButton.addEventListener('click', function (){
        //when the button is clicked hide the main-content section of the quiz
        //use the var mainContent to do that
        mainContent.style.display = 'none';
        wrapper.style.display = 'block';

    })
    //define a function that displays the elements within a wrapper div
    submitButton.addEventListener('click', function (){
        //this function displays the wrapper div and its contents
        wrapper.style.display = 'block';
    })
    //if buttonA is clicked alert to user they got the right answer, and tell them to click next button, 

    buttonA.addEventListener('click', function (){
        alert("you got the answer correct, please hit next question")
        correctAnswers++;
        console.log(correctAnswers);
    })
    //code the next button to hide wrapper and display other wrapper
    nextButton.addEventListener('click', function () {
        wrapper.style.display = 'none';
        wrapper2.style.display = 'block';
    })
    //These next lines of code replicate the above code incrementing the value of the correctAnswers variable to be store in local storage

    //when clicking on answer button b increment correctAnswer by 1
    buttonB2.addEventListener('click', function (){
        alert("you got the answer correct, please hit next question")
        correctAnswers++;
        console.log(correctAnswers);
    })

    buttonC3.addEventListener('click', function (){
        alert("you got the answer correct, please hit next question")
        correctAnswers++;
        console.log(correctAnswers);
    })

    buttonA4.addEventListener('click', function (){
        alert("you got the answer correct, please hit next question")
        correctAnswers++;
        console.log(correctAnswers);
    })

    //Append the correct answer variable to the page
        //let correctAnswers = document.createElement('div')
        //appendChild the value of the correctAnswer variable
    //use set item in order to store that variable to the browsers local storage 
     
    
    
    //Imma try something new Imma create a function called next Question is ran in an addEventListner it will hide the page and d
