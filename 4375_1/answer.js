const fs = require("fs");
let inputs = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let answer = "";

for (const input of inputs) {
  let current = 1;
  let ret = 1;

  while (true) {
    if (current % input === 0) {
      answer += `${ret}\n`;
      break;
    }
    current = current * 10 + 1;
    current = current % input;
    ret++;
  }
}

console.log(answer);
