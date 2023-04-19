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
  const dwarfs = input
    .trim()
    .split("\n")
    .map((el) => Number(el));

  let result;
  const target = dwarfs.reduce((acc, el) => acc + el, 0) - 100;

  const dfs = (arr, depth, combination, sum) => {
    if (result) return;

    if (depth === 0 && sum === target) {
      result = combination;
    }

    arr.forEach((el, idx, origin) => {
      dfs(origin.slice(idx + 1), depth - 1, [...combination, el], sum + el);
    });
  };

  dfs(dwarfs, 2, [], 0);

  dwarfs
    .filter((el) => !result.includes(el))
    .sort((a, b) => a - b)
    .forEach((el) => console.log(el));
}
