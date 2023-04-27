const DIRS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [W, H, K] = input[0].split(" ").map((el) => Number(el));
const map = Array.from({ length: H }, () => Array(W).fill(0));

for (let i = 0; i < K; i++) {
  // Number로 변환안해주니까 틀림..왜..?
  let [y1, x1, y2, x2] = input[i + 1].split(" ").map((el) => Number(el));
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      map[y][x] = 1;
    }
  }
}

const answer = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === 0) {
      let count = 1;
      const queue = [[i, j]];
      map[i][j] = 1;
      while (queue.length) {
        const [currY, currX] = queue.pop();
        DIRS.forEach((dir) => {
          const newY = currY + dir[0];
          const newX = currX + dir[1];
          if (
            newY >= 0 &&
            newY < H &&
            newX >= 0 &&
            newX < W &&
            map[newY][newX] === 0
          ) {
            map[newY][newX] = 1;
            queue.push([newY, newX]);
            count++;
          }
        });
      }
      answer.push(count);
    }
  }
}

console.log(answer.length + "\n" + answer.sort((a, b) => a - b).join(" "));
