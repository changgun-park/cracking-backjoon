const fs = require("fs");
let inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result;
const combination = (start, items) => {
  if (result) return;
  if (items.length === 7) {
    if (items.reduce((a, b) => a + b, 0) === 100) {
      result = items.sort((a, b) => a - b).join("\n");
    }
    return;
  }

  for (let i = start + 1; i < inputs.length; i++) {
    items.push(inputs[i]);
    combination(i, items);
    items.pop();
  }
};

combination(-1, []);
console.log(result);
