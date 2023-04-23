const input = require("fs").readFileSync("./input.txt").toString().trim();

let answer = "";

const map = {};
for (let i = 0; i < input.length; i++) {
  map[input[i]] = map[input[i]] ? map[input[i]] + 1 : 1;
}

const keys = Object.keys(map).sort();

let found = "";
for (const key of keys) {
  if (map[key] % 2 === 1) {
    if (found !== "") {
      answer = "I'm Sorry Hansoo";
      break;
    }
    found = key;
  }
  const count = Math.floor(map[key] / 2);
  for (let i = 0; i < count; i++) {
    answer += key;
  }
}

if (answer === "I'm Sorry Hansoo") {
  console.log(answer);
} else {
  console.log(answer + found + answer.split("").reverse().join(""));
}
