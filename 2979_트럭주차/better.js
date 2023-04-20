const n = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const fees = n
  .shift()
  .split(" ")
  .map((v) => +v);
const [t1, t2, t3] = n.map((v) => v.split(" ").map((v) => +v));

let result = 0;
for (let i = 1; i < 101; i++) {
  let count = 0;
  if (i > t1[0] && i <= t1[1]) count++;
  if (i > t2[0] && i <= t2[1]) count++;
  if (i > t3[0] && i <= t3[1]) count++;
  if (count > 0) result += count * fees[count - 1];
}
console.log(result);
