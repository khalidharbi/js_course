//let age = 12;
//console.log('Sorry, you are not old enough to play this game.');

//let age = 11;
//if (age < 12) {
//console.log('Sorry, you are not old enough to play this game.');
//};

/*
let age = 14;
if (age < 12){
console.log("Sorry, you are not old enough to play this game");
}
else{
console.log("Welcome to the game");  
}

let number = 1;
if (number > 0) {
console.log('+');
}else if (number < 0) {
console.log('-');
}else {
console.log('Zero');
}
*/

const colors = ['red', 'green', 'blue'];
let colorNum = 545;

switch(colorNum){
    case 1:
        console.log(colors[0]);
        break;
    case 2: 
        console.log(colors[1]);
        break;
    case 3:
        console.log(colors[2]);
        break;
    case 4:
    case 5:
    case 6:
        console.log('black');
    default:
        console.log('white');
        break;
}