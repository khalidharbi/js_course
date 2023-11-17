/*
for (let i= 5; i > 0; i--){
    console.log(i);
}

console.log('-----------------------------')

let number = 5;
while (number > 0){
    console.log(number);
    number--;
}

console.log('-----------------------------')


for (let index = 1; index <=10; index++){
    if (index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
}

console.log('-----------------------------')

for (let index =1; index <= 10; index++){
    if (index % 2 == 0){
        console.log("Stop");
        break;
    }
    console.log(index);
}
*/

const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

console.log('-----------------------------')

for(let color of colors){
    console.log(color);
}