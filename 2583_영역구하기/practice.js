const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// N: 세로 M: 가로
const [N, M, K] = input.shift();
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
//모눈종이 만들기
let board = Array.from(Array(M), () => Array(N).fill(0));
for (let i = 0; i < K; i++) {
  const [startY, startX, endY, endX] = input[i];
  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      board[y][x] = 1;
    }
  }
}

// 영역 나누기
const area = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] == 0) {
      let q = [];
      board[i][j] = 1;
      q.push([i, j]);
      let cnt = 1;
      while (q.length > 0) {
        const [a, b] = q.pop();
        dir.forEach((v) => {
          const [c, d] = v;
          if (
            a + c < M &&
            a + c > -1 &&
            b + d < N &&
            b + d > -1 &&
            board[a + c][b + d] == 0
          ) {
            board[a + c][b + d] = 1;
            q.push([a + c, b + d]);
            cnt++;
          }
        });
      }
      area.push(cnt);
    }
  }
}

// let answer = `${area.length}\n` + area.sort((a, b) => a - b).join(" ");

// console.log(answer);

[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

[
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
