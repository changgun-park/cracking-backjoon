const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = [];
const lines = input.slice(1);

for (const line of lines) {
  const numbers = line.match(/\d+/g);
  if (numbers) answer.push(...numbers);
}

console.log(
  answer
    .map(BigInt)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      if (a === b) return 0;
    })
    .join("\n")
);
