// 배열과 숫자가 주어졌을 때
// 가능한 모든 조합을 반환하기
// ex) [1, 2, 3, 4], 3 => [[1, 2, 3], [1, 2, 4], [2, 3, 4]]

function getCombination(arr, depth) {
  const results = [];
  if (depth === 1) return arr.map((el) => [el]);

  arr.forEach((el, idx, origin) => {
    const combinations = getCombination(origin.slice(idx + 1), depth - 1);
    const attached = combinations.map((combination) => [el, ...combination]);
    results.push(...attached);
  });

  return results;
}

console.log(getCombination([1, 2, 3], 0));
