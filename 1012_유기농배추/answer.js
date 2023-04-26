const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const T = Number(input[0]);
let idx = 1;

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[idx].split(" ").map((el) => Number(el));
  const map = Array.from({ length: N }, () => Array(M).fill(0));

  for (let j = 1; j < K + 1; j++) {
    const [x, y] = input[idx + j].split(" ").map((el) => Number(el));
    map[y][x] = 1;
  }

  answer += solve(map) + "\n";
  idx = idx + K + 1;
}

console.log(answer);

function solve(map) {
  let result = 0;

  const bfs = (y, x) => {
    const queue = [[y, x]];
    map[y][x] = 0;
    const M = map[0].length;
    const N = map.length;

    while (queue.length) {
      const [currY, currX] = queue.shift();

      DIRS.forEach((dir) => {
        const newY = currY + dir[0];
        const newX = currX + dir[1];
        if (
          newX >= 0 &&
          newX < M &&
          newY >= 0 &&
          newY < N &&
          map[newY][newX] === 1
        ) {
          map[newY][newX] = 0;
          queue.push([newY, newX]);
        }
      });
    }
  };

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 1) {
        bfs(i, j, map);
        result += 1;
      }
    }
  }
  return result;
}
