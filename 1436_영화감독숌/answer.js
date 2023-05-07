const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let N = Number(input);
let current = 665;

while (N > 0) {
  current++;
  if (current.toString().includes("666")) {
    N--;
  }
}

console.log(current);
