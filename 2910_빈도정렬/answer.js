const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = [];
const arr = input[1].split(" ").map((el) => +el);
const map = new Map();

for (const num of arr) {
  map.set(num, map.get(num) ? map.get(num) + 1 : 1);
}

const sorted = new Map([...map].sort((a, b) => b[1] - a[1]));

sorted.forEach((value, key) => {
  for (let i = 0; i < value; i++) {
    answer.push(key);
  }
});

console.log(answer.join(" "));
