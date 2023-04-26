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

const N = Number(input[0]);
const map = input.slice(1).map((str) => str.split(" ").map((el) => Number(el)));

let answer = 1; // 최종 반환 값

// 1. '비' 높이의 범위 구하기
let minRain = Number.MAX_SAFE_INTEGER;
let maxRain = 0;
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    minRain = Math.min(map[i][j], minRain);
    maxRain = Math.max(map[i][j], maxRain);
  }
}

// 2. 각각의 '비' 높이에 대해서 잠기지 않는 지역 개수 구하기
for (let rain = minRain; rain < maxRain; rain++) {
  let result = 0;
  const visited = Array.from({ length: map.length }, () =>
    Array(map.length).fill(false)
  );

  const bfs = (y, x) => {
    const queue = [[y, x]];

    while (queue.length > 0) {
      const [currY, currX] = queue.pop();
      DIRS.forEach((dir) => {
        const newY = currY + dir[0];
        const newX = currX + dir[1];
        if (
          newY >= 0 &&
          newY < N &&
          newX >= 0 &&
          newX < N &&
          !visited[newY][newX] &&
          map[newY][newX] > rain
        ) {
          visited[newY][newX] = true;
          queue.push([newY, newX]);
        }
      });
    }
  };

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (!visited[i][j] && map[i][j] > rain) {
        visited[i][j] = true;
        bfs(i, j);
        result++;
      }
    }
  }

  answer = Math.max(result, answer);
}

console.log(answer);
