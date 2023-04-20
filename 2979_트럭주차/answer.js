var fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(fees, ranges) {
  let result = 0;
  const start = ranges.reduce((acc, el) => Math.min(el[0], acc), 100);
  const end = ranges.reduce((acc, el) => Math.max(el[1], acc), 0);

  for (let i = start + 1; i < end + 1; i++) {
    let count = 0;
    if (i > ranges[0][0] && i <= ranges[0][1]) count++;
    if (i > ranges[1][0] && i <= ranges[1][1]) count++;
    if (i > ranges[2][0] && i <= ranges[2][1]) count++;
    if (count > 0) result += fees[count - 1] * count;
  }
  console.log(result);
}

solution(
  input[0].split(" ").map((el) => Number(el)),
  input.slice(1).map((el) => el.split(" ").map((el) => Number(el)))
);
