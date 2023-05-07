const [_N, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function format(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

let scores = [null, 0, 0];
let times = [null, 0, 0];
let prevTime = null;

inputs.push("2 48:00");
for (const input of inputs) {
  const [team, time] = input.split(" ");
  let [min, sec] = time.split(":").map(Number);
  let timeInSeconds = min * 60 + sec;

  if (scores[1] > scores[2]) {
    times[1] += timeInSeconds - prevTime;
  }
  if (scores[2] > scores[1]) {
    times[2] += timeInSeconds - prevTime;
  }

  scores[team]++;
  prevTime = timeInSeconds;
}

console.log(format(times[1]) + "\n" + format(times[2]));
