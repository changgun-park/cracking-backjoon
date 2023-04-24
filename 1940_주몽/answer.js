const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const M = Number(input[1]);
const materials = input[2]
  .split(" ")
  .map((el) => Number(el))
  .sort((a, b) => a - b);

let result = 0;
let i = 0;
let j = materials.length - 1;

while (i < j) {
  const sum = materials[i] + materials[j];
  if (sum < M) {
    i++;
  } else if (sum > M) {
    j--;
  } else {
    i++;
    j--;
    result++;
  }
}

console.log(result);
