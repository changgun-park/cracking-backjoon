const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = [];
for (let i = 0; i < input.length - 1; i++) {
  let chk = true;

  if (!input[i].match(/[aeiou]/g)) chk = false;
  if (input[i].match(/[aeiou]{3}/g) || input[i].match(/[^aeiou]{3}/g))
    chk = false;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "e" || input[i][j] === "o") continue;
    if (input[i][j] === input[i][j - 1]) {
      chk = false;
      break;
    }
  }

  ans.push(`<${input[i]}> is ${chk ? "" : "not "}acceptable.`);
}
