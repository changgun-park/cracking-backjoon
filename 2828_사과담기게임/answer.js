const [_NM, _J, ..._apples] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [_, M] = _NM.split(" ").map((el) => Number(el));
const apples = _apples.map((el) => Number(el));

let answer = 0;
let current = [1, M];
apples.forEach((pos) => {
  if (pos > current[1]) {
    const steps = pos - current[1];
    current = [current[0] + steps, pos];
    answer += steps;
    return;
  } else if (pos < current[0]) {
    const steps = current[0] - pos;
    current = [pos, current[1] - steps];
    answer += steps;
    return;
  }
});

console.log(answer);
