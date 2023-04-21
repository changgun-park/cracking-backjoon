const [_, pattern, ...files] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const idx = pattern.indexOf("*");
const first = pattern.slice(0, idx);
const last = pattern.slice(idx + 1);

let result = "";
for (let file of files) {
  // 첫번째 패턴 찾고, 문자열에서 제외하기
  if (file.indexOf(first) === 0) {
    file = file.slice(first.length);
  } else {
    result += "NE\n";
    continue;
  }

  // 마지막 패턴 찾기
  if (file.lastIndexOf(last) === file.length - last.length) {
    result += "DA\n";
  } else {
    result += "NE\n";
  }
}

console.log(result);
