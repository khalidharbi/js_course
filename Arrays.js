let colors = ["red", "green", "blue"]; //declaring an array
console.log(colors);
console.log(colors[0]);
colors[1] = 'black';
console.log(colors);
console.log(colors.length);
console.log(colors.includes('red'));
colors.push('green');
console.log(colors);
colors.push('gray');
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift('gray');
console.log(colors);

const graycolor = colors.shift();
console.log(colors);
console.log(graycolor);

console.log(Array.isArray(colors));