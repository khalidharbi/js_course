/*
function printNum(){
    console.log(0);
}

printNum();

function printNumbers(to){
    for(let i =1; i<= to; i++){
        console.log(i);
    }
}

printNumbers(8);


function add(firstNum, secondNumber){
    console.log(firstNum + secondNumber);
}

add(2,7);
*/

function add(firstNum, seceondNum){
    let result = firstNum + seceondNum;
    return result;
}

let value = add(2, 7) + add(6,2);
console.log(value);

function printNumbers(to){
    if (to > 10){
        return console.log("sorry");
    }
    for(let i=1; i <= to; i++){
        console.log(i);
    }
    return;
}

printNumbers(34);

function myFunc(number) {
    console.log(`${number} x ${number} = ` + number * number)
    return number * number
  }
  myFunc(2)