const words = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let result = 0;
for (const word of words) {
  const stack = [];
  for (let i = 0; i < word.length; i++) {
    if (stack[stack.length - 1] === word[i]) stack.pop();
    else stack.push(word[i]);
  }
  if (stack.length === 0) result++;
}

console.log(result);
