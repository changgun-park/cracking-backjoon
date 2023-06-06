const result = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((line) => {
    const stack = [];
    for (const str of line) {
      switch (str) {
        case "(":
        case "[":
          stack.push(str === "(");
        case ")":
        case "]":
          if (stack.pop() !== (str === ")")) return "no";
      }
    }
    return stack.length > 0 ? "no" : "yes";
  });

console.log(result.join("\n"));
