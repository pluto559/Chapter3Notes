//1
let vals = [1, 2, 3, 4, 5, 6, 7]
let newVals = []
for (let i=0; i<vals.length; i++){
    newVals.push(vals[i]);
}
newVals[0]=-2
if (newVals[0] < 1){
    console.log('invalid');
} else {
    console.log(newVals)
}

//3
let vals = [5, 4, 3, 2, 1]
let newVals = [12, 12, 12, 12, 12]
console.log('newVals: ' + newVals)

//4
let vals = [5, 4, 3, 2, 1]
let newVals = [12, 12, 12, 12, 12]
console.log('vals: ' + vals)
console.log('newVals: ' + newVals)

//5
let vals = [5, 4, 3, 2, 1]
if (vals[0] > vals[4]){
    vals[1] = 5;
    vals[2] = 5;
    vals[3] = 5;
    vals[4] = 5;
    console.log(vals);
}

//6
let vals = [5, 4, 3, 2, 1]
let newVals = []
if (vals[0] > vals[4]){
    newVals[0] = 5;
    newVals[1] = 5;
    newVals[2] = 5;
    newVals[3] = 5;
    newVals[4] = 5;
    console.log(vals);
    console.log(newVals);
}

//7
let vals = [5, 4, 3, 2, 1]
if (vals[0] > vals[4]){
    vals[1] = 1;
    vals[2] = 1;
    vals[3] = 1;
    vals[0] = 1;
    console.log(vals);
}

//8
let vals = [5, 4, 3, 2, 1]
let newVals = []
if (vals[0] > vals[4]){
    newVals[0] = 1;
    newVals[1] = 1;
    newVals[2] = 1;
    newVals[3] = 1;
    newVals[4] = 1;
    console.log(vals);
    console.log(newVals);
}

//9
let vals = [1, 2, 3, 4]
let num = 1*2*3*4
vals[0] = num/1
vals[1] = num/2
vals[2] = num/3
vals[3] = num/4
console.log(vals)

// 10
let vals = [1, 2, 3, 4]
let newVals = []
let num = 1*2*3*4
newVals[0] = num/1
newVals[1] = num/2
newVals[2] = num/3
newVals[3] = num/4
console.log(vals)
console.log(newVals)


