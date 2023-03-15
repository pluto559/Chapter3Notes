// 1
function areaRectangle(length, width){
    console.log(`area of rectangle: ${length*width}`);
}
areaRectangle(4, 5);
areaRectangle(10, 6);

// 2
function areaCircle(radius){
    console.log(`area of circle: ${radius*3.14}`);
}
areaCircle(4);
areaCircle(7);

// 3
function min(x, y){
    if (x > y){
        console.log(`${y} is the smallest`);
    } else {
        console.log(`${x} is the smallest`);
    }
}
min(2, 10);
min(12, 3);

// 4
function equal(u, v){
    console.log(u != v);
}
equal(3, 3);
equal(4,6);

// 5
function largestRect(num1, num2, num3, num4){
    if ((num1*num2) > (num3*num4)){
        console.log('the first rectangle is the largest.');
    } else {
        console.log('the second rectangle is the largest.');
    }
}
largestRect(4, 5, 6, 7);
largestRect(7, 8, 4, 3);

// 6
function charity(a1, a2, a3){
    if (a1+a2+a3 > 1000){
        console.log(`money received: ${(a1+a2+a3)*2}`);
    } else {
        console.log(`money received: ${a1+a2+a3}`);
    }
}
charity(300, 700,1);
charity(50, 100, 300);

// 7
function matter(temp){
    if (temp < 32){
        console.log('solid as this temperature');
    } else if (212 < temp){
        console.log('gas at this temperature');
    } else {
        console.log('liquid at this temperature');
    }
}
matter(30);
matter(250);
matter(50);

// 8
function maxVal(b1, b2, b3){
    if (b1 > b2 && b1 > b3){
        console.log(`${b1} is the largest`);
    } else if (b2 > b1 && b2 > b3){
        console.log(`${b2} is the largest`);
    } else if (b3 > b1 && b3 > b2){
        console.log(`${b3} is the largest`);
    }
}
maxVal(13, 24, 55);
maxVal(45, 12, 27);

// 9
function minVal(c1, c2, c3){
    if (c1 < c2 && c1 < c3){
        console.log(`${c1} is the smallest`);
    } else if (c2 < c1 && c2 < c3){
        console.log(`${c2} is the smallest`);
    } else if (c3 < c1 && c3 < c2){
        console.log(`${c3} is the smallest`);
    }
}
minVal(13, 24, 55);
minVal(45, 12, 27);

// 10
function charity2(q1, q2, q3){
    if (q1+q2+q3 > 1000){
        console.log(`money received: ${(q1+q2+q3)+100}`);
    } else if (1000 > q1+q2+q3 > 2000){
        console.log(`money received: ${(q1+q2+q3)*2}`);
    } else if (q1+q2+q3 > 2000){
        console.log(`money received: ${(q1+q2+q3)+2000}`);
    }
}
charity2(300, 700,1);
charity2(50, 100, 300);
charity2(2000, 30, 4);