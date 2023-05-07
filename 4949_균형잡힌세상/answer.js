const lines = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

const matcher = {
  ")": "(",
  "]": "[",
};

const result = [];
for (const line of lines) {
  const stack = [];
  for (const str of line) {
    if (str === "(" || str === "[") {
      stack.push(str);
    }
    if (str === ")" || str === "]") {
      if (stack[stack.length - 1] === matcher[str]) {
        stack.pop();
      } else {
        stack.push(str);
      }
    }
  }
  if (stack.length) result.push("no");
  else result.push("yes");
}

console.log(result.join("\n"));
