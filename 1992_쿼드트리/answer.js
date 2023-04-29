const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const map = input.slice(1).map((el) => el.split(""));

const answer = (function solve(size, y, x) {
  if (size === 1) return map[y][x];

  const half = size / 2;
  const result =
    solve(half, y, x) +
    solve(half, y, x + half) +
    solve(half, y + half, x) +
    solve(half, y + half, x + half);

  if (result === "1111") return "1";

  if (result === "0000") return "0";

  return `(${result})`;
})(N, 0, 0);

console.log(answer);
