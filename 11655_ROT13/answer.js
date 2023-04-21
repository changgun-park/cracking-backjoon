const input = require("fs").readFileSync("./input.txt").toString();

let result = "";

for (let i = 0; i < input.length; i++) {
  let str = input[i];
  const code = input.charCodeAt(i);
  if (code >= 97 && code <= 122) {
    str = String.fromCharCode(((code - 97 + 13) % 26) + 97);
  }

  if (code >= 65 && code <= 90) {
    str = String.fromCharCode(((code - 65 + 13) % 26) + 65);
  }
  result = result + str;
}

console.log(result);
