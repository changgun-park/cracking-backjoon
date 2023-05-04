const [N, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let last = {
  team: null,
  time: null,
};

const score = {
  1: 0,
  2: 0,
};

const winTime = {
  1: 0,
  2: 0,
};

// 점수가 앞설 때부터 ~ 점수가 동점이 될때까지
for (const input of inputs) {
  const [team, current] = input.split(" ");
  score[team]++;

  // 동점
  if (score[1] === score[2]) {
    const winningTeam = last.team;
    const add = getTimeGap(last.time, current);
    winTime[winningTeam] += add;
    last = {
      team: null,
      time: null,
    };
  }
  // 앞섬
  if (score[1] > score[2] && last.team !== 1) {
    last.team = 1;
    last.time = current;
  }

  if (score[2] > score[1] && last.team !== 2) {
    last.team = 2;
    last.time = current;
  }
}

if (last.team !== null) {
  const winningTeam = last.team;
  const add = getTimeGap(last.time, "48:00");
  winTime[winningTeam] += add;
}

console.log(parseTime(winTime[1]) + "\n" + parseTime(winTime[2]));

// [time, time]
function getTimeGap(...times) {
  const result = [];

  for (const time of times) {
    let [minutes, seconds] = time.split(":").map(Number);
    seconds += minutes * 60;
    result.push(seconds);
  }

  return result[1] - result[0];
}

function parseTime(time) {
  let result = "";
  const minutes = Math.floor(time / 60);
  if (minutes < 10) {
    result += `0${minutes}`;
  } else {
    result += minutes;
  }
  const seconds = time % 60;
  if (seconds < 10) {
    result += `:0${seconds}`;
  } else {
    result += ":" + seconds;
  }
  return result;
}
