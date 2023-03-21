function printText(text){  //text is a parameter
    console.log(text);
}

printText("Kamala Harris");
printText("Harris Kamala");

//2
function numGen(num1, num2){
    console.log(`${num1}${num2}`);
}
numGen(3, 4);
numGen(1, 2);

//3
function avgTemp(day1, day2, day3, day4, day5, day6, day7){
    console.log(`avg temp: ${((day1+day2+day3+day4+day5+day6+day7)/7).toFixed(2)}`)
}
avgTemp(45, 56, 60,50,53,55,60);
avgTemp(33, 45, 50,30,50,44,43);

//4
function charity(people, amt1, amt2, amt3){
    if (amt1+amt2+amt3 < 1000){
        console.log(`${(amt1+amt2+amt3)+100}`);
    } else if (2000 > amt1+amt2+amt3 > 1000){
        console.log(`${(amt1+amt2+amt3)*2}`);
    } else if (amt1+amt2+amt3 > 2000){
        console.log(`${(amt1+amt2+amt3)+2000}`);
    }
}
charity(3, 300, 200, 200);
charity(3, 400, 500, 700);

//5
function darts(round1, round2, round3){
    console.log(`${round1+round2+round3}`);
}
darts(80, 180, 57);
darts(180, 180, 180);

//6
function dartsTour(p11,p12,p13, p21, p22, p23){
    if ((p11+p12+p13)>(p21+p22+p23)){
        console.log(`player one scored: ${p11+p12+p13}\nplayer two scored: ${p21+p22+p23}\nplayer one wins`)
    } else if ((p11+p12+p13)<(p21+p22+p23)){
        console.log(`player one scored: ${p11+p12+p13}\nplayer two scored: ${p21+p22+p23}\nplayer two wins`)
    } else if ((p11+p12+p13)==(p21+p22+p23)){
        console.log(`player one scored: ${p11+p12+p13}\nplayer two scored: ${p21+p22+p23}\ntie!`)
    }
}
dartsTour(40, 30, 180, 180, 180, 40);
dartsTour(180, 180, 180, 180,180, 180);

//7
function linFx(mVar, bVar){
    console.log(`y=${mVar}x+${bVar}`);
}
linFx(1/2, 5);
linFx(3, 2);

//8
function slope(x1, y1, x2, y2){
    console.log(`${y2-y1}/${x2-x1}`)
}
slope(3,4,5,5);
slope(4,2, 3,1);