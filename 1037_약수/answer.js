// const fs = require("fs");

// let [count, divisors] = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let input = "";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input += line + "\n";
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  let [count, divisors] = input.split("\n");
  divisors = divisors
    .trim()
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);

  console.log(divisors[0] * divisors[divisors.length - 1]);
}

// divisors = divisors
//   .split(" ")
//   .map((el) => Number(el))
//   .sort((a, b) => a - b);

// console.log(divisors[0] * divisors[divisors.length - 1]);
