const [params, ...rest] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = params.split(" ").map((el) => +el);
const numToStr = rest.slice(0, N);
const strToNum = {};
for (const [key, value] of Object.entries(numToStr)) {
  strToNum[value] = key;
}

const problems = rest.slice(N);

const answer = [];

for (const problem of problems) {
  if (parseInt(problem) === +problem) {
    answer.push(numToStr[problem - 1]);
  } else {
    answer.push(+strToNum[problem] + 1);
  }
}

console.log(answer.join("\n"));

// isNaN이라는 메소드...
