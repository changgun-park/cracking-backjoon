const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((el) => +el);
const arr = input[1].split(" ").map((el) => +el);

let sum = arr.slice(0, K).reduce((acc, el) => acc + el, 0);
let max = sum;
for (i = K; i < N; i++) {
  sum = sum + arr[i] - arr[i - K];
  max = Math.max(max, sum);
}
console.log(max);
