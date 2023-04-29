const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);

const dict = new Map();
arr.forEach((num) => {
  const freq = dict.get(num) ?? 0;
  dict.set(num, freq + 1);
});

// 메소드 활용이 굉장히 깔끔함..
const sorted = [...dict]
  .sort((a, b) => b[1] - a[1])
  .map(([key, freq]) => Array(freq).fill(key))
  .flat();

console.log(sorted.join(" "));
