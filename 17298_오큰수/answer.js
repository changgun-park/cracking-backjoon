const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const answer = Array(N).fill(-1);
const stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
    const index = stack.pop();
    answer[index] = nums[i];
  }

  stack.push(i);
}

console.log(answer.join(" "));
