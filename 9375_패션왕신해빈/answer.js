const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const answer = [];
for (let i = 0; i < N; i++) {
  const clothes = {};
  const lines = Number(input.shift());

  for (let j = 0; j < lines; j++) {
    const [name, category] = input.shift().split(" ");
    clothes[category] = clothes[category] ? clothes[category] + 1 : 1;
  }

  const result =
    Object.values(clothes)
      .map((el) => el + 1)
      .reduce((acc, el) => acc * el, 1) - 1;

  answer.push(result);
}

console.log(answer.join("\n"));
