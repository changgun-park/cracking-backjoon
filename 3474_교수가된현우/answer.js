const [_, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

inputs.forEach((num) => {
  let byTwo = 0;
  let byFive = 0;

  for (let i = 2; i <= num; i *= 2) {
    byTwo += Math.floor(num / i);
  }

  for (let i = 5; i <= num; i *= 5) {
    byFive += Math.floor(num / i);
  }

  answer.push(Math.min(byFive, byTwo));
});

console.log(answer.join("\n"));
