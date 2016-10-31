var questions = [
    {
        question: 'What temperature is water the most dense?',
        answer1: '0 degrees celcius',
        answer2: '50 degrees celcius',
        answer3: '100 degrees celcius',
        correctAnswer: 3
    },
    {
        question: '2What temperature is water the most dense?',
        answer1: '20 degrees celcius',
        answer2: '250 degrees celcius',
        answer3: '2100 degrees celcius',
        correctAnswer: 3
    },
    {
        question: '3What temperature is water the most dense?',
        answer1: '30 degrees celcius',
        answer2: '350 degrees celcius',
        answer3: '3100 degrees celcius',
        correctAnswer: 1
    }
];


var readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout);

var numcorrect = 0;

questions.forEach(function (item, index) {
    console.log("question: "  + item.question);
    console.log("answer1: "  + item.answer1);
    console.log("answer2: "  + item.answer2);
    console.log("answer3: "  + item.answer3);
    console.log();
    console.log("type your answer: ");
    
    //if(index <= questions.length){
        r1.prompt();   
    //}
    
    r1.on('line', function(userInput){
        
        var userAnswer = parseInt(userInput);
        
        if(userAnswer === item.correctAnswer){
            console.log('correct');
            numcorrect++;
        }else{
            console.log('false');
        }
    
    })
    
});