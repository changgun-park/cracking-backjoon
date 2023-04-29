// 정규식으로 풀 수 있으면 멋있을 거 같음...

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = [];

const isVowel = (chr) => {
  if ("aeiou".includes(chr)) return true;
  return false;
};

input.forEach((password) => {
  if (password === "end") return;

  let cond1 = false;
  for (let i = 0; i < password.length; i++) {
    if (isVowel(password[i])) {
      cond1 = true;
      break;
    }
  }

  let cond2 = true;
  for (let i = 2; i < password.length; i++) {
    if (
      isVowel(password[i]) === isVowel(password[i - 1]) &&
      isVowel(password[i - 1]) === isVowel(password[i - 2])
    ) {
      cond2 = false;
    }
  }

  let cond3 = true;
  for (let i = 1; i < password.length; i++) {
    if (
      password[i] === password[i - 1] &&
      password[i] !== "e" &&
      password[i] !== "o"
    ) {
      cond3 = false;
    }
  }

  if (cond1 && cond2 && cond3) {
    answer.push(`<${password}> is acceptable.`);
  } else {
    answer.push(`<${password}> is not acceptable.`);
  }
});

console.log(answer.join("\n"));
