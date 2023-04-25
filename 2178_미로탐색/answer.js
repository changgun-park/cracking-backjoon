const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((el) => Number(el));
const map = input.slice(1).map((el) => el.split("").map((el) => Number(el)));

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const queue = [[0, 0, 1]];
map[0][0] = 0;

while (queue.length > 0) {
  const [currY, currX, dist] = queue.shift();

  if (currX === M - 1 && currY === N - 1) {
    console.log(dist);
    return;
  }

  for (const [dirY, dirX] of DIRS) {
    const newY = currY + dirY;
    const newX = currX + dirX;
    if (
      newY >= 0 &&
      newY < N &&
      newX >= 0 &&
      newX < M &&
      map[newY][newX] === 1
    ) {
      queue.push([newY, newX, dist + 1]);
      map[newY][newX] = 0;
    }
  }
}
