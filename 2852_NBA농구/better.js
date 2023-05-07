const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = require("fs").readFileSync(path).toString().trim().split("\n");
let n = +arr.shift();
let res = [];
let [team1, team2] = [0, 0];
let [time1, time2] = [0, 0];
let tempTime = 0;

for (let item of arr) {
  let [team, time] = item.split(" ");
  let [min, sec] = time.split(":").map((v) => parseInt(v));
  let secT = min * 60 + sec;
  res.push({
    team,
    time: secT,
  });
}

for (let goal of res) {
  if (team1 > team2) {
    time1 += goal.time - tempTime;
  } else if (team1 < team2) {
    time2 += goal.time - tempTime;
  }

  if (goal.team === "1") {
    team1++;
  } else {
    team2++;
  }

  tempTime = goal.time;
}

if (team1 > team2) {
  time1 += 48 * 60 - tempTime;
} else if (team1 < team2) {
  time2 += 48 * 60 - tempTime;
}

let ans = [parseInt(time1 / 60), time1 % 60, parseInt(time2 / 60), time2 % 60];

ans = ans.map((n) => {
  let temp = n.toString();
  if (temp.length === 1) return "0" + temp;
  else return temp;
});

console.log(`${ans[0]}:${ans[1]}`);
console.log(`${ans[2]}:${ans[3]}`);
