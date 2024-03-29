const readline= require('readline-sync');

let order = [];
let total = [];

//step 1
console.log('sandwiches choices:\nchicken: $5.25, beef: $6.25, tofu: $5.75');
order[0] = readline.question('sandwich of your choice: ');
if (order[0] == 'beef' || order[0] == 'Beef'){
    total[0] = 6.25;
} else if (order[0] == 'chicken' || order[0] == 'Chicken'){
    total[0] = 5.25;
} else if (order[0] == 'tofu' || order[0] == 'Tofu'){
    total[0] = 5.75;
} else {
    console.log("invalid choice");
    order[0] = readline.question('sandwich of your choice: ');
}
console.log(order);

//step 2
drink = readline.question('would you like a drink? (yes/no): ');
if (drink == "yes" || drink == "Yes") {
    console.log('drink size choices:\nsmall: $1.00, medium: $1.75, large: $2.25');
    order[1] = readline.question('size of your choice: ');
    if (order[1] == 'small' || order[1] == 'Small') {
        total[1] = 1;
    } else if (order[1] == 'medium' || order[1] == 'Medium') {
        total[1] = 1.75;
    } else if (order[1] == 'large' || order[1] == 'Large') {
        total[1] = 2.25;
    } else {
        console.log("invalid choice");
        order[1]  = readline.question('sandwich of your choice: ');
    }
}
if(drink == "no" || drink == "No")
    total[1] = 0;
console.log(order);
console.log(`total: $${total[0]+total[1]}`);

// step 3
fries = readline.question('would you like fries? (yes/no): ');
if (fries == "yes" || fries == "Yes") {
    console.log('fries size choices:\nsmall: $1.00, medium: $1.50, large: $2.00');
    order[2] = readline.question('size of your choice: ');
    if (order[2] == 'small' || order[2] == 'Small') {
        let yn = readline.question('would you like to mega-size your fries? (yes/no): ');
        if (yn == 'yes' || yn == 'Yes') {
            order[2] = 'large';
            total[2] = 2;
        } else {
            total[2] = 1;
        }
    } else if (order[2] == 'medium' || order[2] == 'Medium') {
        total[2] = 1.50;
    } else if (order[2] == 'large' || order[2] == 'Large') {
        total[2] = 2;
    } else {
        console.log("invalid choice");
        order[2] = readline.question('size of your choice: ');
    }
}
if(fries == "no" || fries == "No")
    total[2] = 0;


console.log(order);
console.log(`total: $${total[0]+total[1]+total[2]}`);

// step 4
sauces = readline.question('would you like a ketchup? (yes/no): ');
if (sauces == "yes" || sauces == "Yes") {
    console.log('one ketchup packet costs $0.25');

    total[3] = Number(readline.question('how many would you like: ')) * .25;
    order[3]= total[3]
}
if(sauces == "no" || sauces == "No")
    total[3] = 0;
// extension
white = readline.question('would you like a barbeque? (yes/no): ');
if (white == "yes" || white == "Yes") {
    console.log('one barbeque packet costs $0.30');
    total[4] = Number(readline.question('how many would you like: ')) * .30;
    order[4]= total[4]
}
if(white == "no" || white == "No")
    total[4] = 0;

black = readline.question('would you like a ranch? (yes/no): ');
if (black == "yes" || black == "Yes") {
    console.log('one ranch packet costs $0.10');
    total[5] = Number(readline.question('how many would you like: ')) * .10;
    order[5]= total[5]
}
if(black == "no" || black == "No")
    total[5] = 0;



console.log(order);
console.log(`total: $${total[0]+total[1]+total[2]+total[3]+total[4]+total[5]}`);

// next steps Daniel
total[7] = Number((total[0]+total[1]+total[2]+total[3]+total[6])*.07)+(total[0]+total[1]+total[2]+total[3]+total[6]).toFixed(2);
console.log(total[7]);