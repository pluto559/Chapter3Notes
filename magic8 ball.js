const readLine=require('readline-sync');


readLine.question('ask the magic 8 ball a question: ');
let answerList = ['yes', 'no', 'maybe'];
let randomNum = Math.floor(Math.random()*answerList.length);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);