const input = require("fs").readFileSync("./input.txt").toString().trim();

let result = 1;

let i = 0;
let j = input.length - 1;

while (i < j) {
  if (input[i] !== input[j]) {
    result = 0;
    break;
  }
  i++;
  j--;
}

console.log(result);
