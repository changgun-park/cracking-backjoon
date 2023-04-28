const map = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((el) => el.split(""));

const result = (function solve(map) {
  if (map.length === 1) return map[0][0];

  const divider = map.length / 2;

  const topLeft = solve(
    map.slice(0, divider).map((el) => el.slice(0, divider))
  );
  const topRight = solve(map.slice(0, divider).map((el) => el.slice(divider)));
  const bottomLeft = solve(
    map.slice(divider).map((el) => el.slice(0, divider))
  );
  const bottomRight = solve(map.slice(divider).map((el) => el.slice(divider)));

  if (
    topLeft === topRight &&
    topRight === bottomLeft &&
    bottomLeft === bottomRight &&
    (topLeft === "1" || topLeft === "0")
  ) {
    return topLeft;
  }

  return `(${topLeft}${topRight}${bottomLeft}${bottomRight})`;
})(map);

console.log(result);
