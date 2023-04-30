const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input[0].split(" ").map(Number);

const map = input.slice(1).map((row) => row.split(""));

for (const row of map) {
  let pre = null;
  for (let i = 0; i < W; i++) {
    if (row[i] == "c") pre = i;
    row[i] = pre === null ? -1 : i - pre;
  }
}

console.log(map.map((row) => row.join(" ")).join("\n"));
