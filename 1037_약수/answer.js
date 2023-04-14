// var n = require("fs")
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .filter(function (e, i) {
//     return i !== 0;
//   })[0]
//   .split(" ")
//   .map(function (e) {
//     return parseInt(e);
//   })
//   .sort(function (a, b) {
//     return a - b;
//   });
// console.log(n[0] * n[n.length - 1]);

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
