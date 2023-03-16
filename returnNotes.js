//Parameters are placeholder variables that allow
//us to reuse functions

//Example 1: Without Parameter(s)
function printYes(){
    console.log("yes");
}

printYes();
printYes();

//Example 2: With Parameter
function printText(text){  //text is a parameter
    console.log(text);
}

printText("Happy Birthday!");
printText("Today is Monday!");

//Return statements provide values to the rest of
//the program. Returned values can be used by other
//parts of the code. Console.log values cannot be
//used by other lines of codes

//Example 3: Without Return
function double(num){
    console.log(num*2);
}

double(3);
double(5);

//Example 4: With return
function triple(num){
    return (num*3);
}

//console.log(triple(7));
let anwser = triple(12);
anwser -=2;
console.log(anwser);

//Example 5: Another return
function LoseLife(lives){
    return (lives - 1);
}

let totalLives = 10;
totalLives = LoseLife(totalLives);
console.log(totalLives);

//Scope is the part of the program where the binding (value of a variable) is visible.
//global scope: created outside all {} and accessible everywhere
//local scope: created inside a {} and only accessible inside that {}

//Example 6: Different Scopes
let x=10; //global x
if (true){

    let y=20; //local y
    let z= 30; //local z
    console.log(x + y + z);

}
console.log(x); //y and z are not accessible outside {}

//Example 7: no naming conflict
function half(n){
    return (n/2);
}

let n = 10; //global n
console.log(half(100));
console.log(n); //since there is no {} or function call, use global n