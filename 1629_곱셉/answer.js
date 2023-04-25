// 수학 문제 넘모 싫다
// 자연수 A를 B번 곱한 수를 C로 나눈 값은?
// 모듈라 분배 법칙 활용 단골 문제
const [A, B, C] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const solve = (power) => {
  if (power === 1n) {
    return A % C;
  }

  const half = solve(power / 2n) % C;

  if (power % 2n) {
    return (half * half * (A % C)) % C;
  }

  return (half * half) % C;
};
