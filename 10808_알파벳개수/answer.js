var fs = require("fs");
var input = fs.readFileSync("./input.txt").toString().trim();

solution(input);

function solution(input) {
  const result = Array(26).fill(0);

  for (let i = 0; i < input.length; i++) {
    const idx = input.charCodeAt(i) - "a".charCodeAt(0);
    result[idx]++;
  }

  console.log(result.join(" "));
}
