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
  const total = dwarfs.reduce((acc, el) => acc + el, 0);
  let answer;
  for (let i = 0; i < dwarfs.length - 1; i++) {
    for (let j = i + 1; j < dwarfs.length; j++) {
      if (total - dwarfs[i] - dwarfs[j] === 100) {
        answer = dwarfs
          .filter((_, idx) => idx !== i && idx !== j)
          .sort((a, b) => a - b)
          .forEach((el) => console.log(el));
        return;
      }
    }
  }
}
