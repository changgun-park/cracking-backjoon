const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const T = Number(input[0]);
let idx = 1;

for (let i = 0; i < T; i++) {
  const N = Number(input[idx]);
  const clothes = {};
  for (let j = 1; j <= N; j++) {
    const category = input[idx + j].split(" ")[1];
    clothes[category] = clothes[category] ? clothes[category] + 1 : 1;
  }

  const result =
    Object.values(clothes)
      .map((el) => el + 1)
      .reduce((acc, el) => acc * el, 1) - 1;

  answer += result + "\n";
  idx = idx + N + 1;
}

console.log(answer);
