const input = require("fs").readFileSync("./input.txt").toString().trim();

let result = 1;
for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[input.length - i - 1]) {
    result = 0;
    break;
  }
}
console.log(result);
