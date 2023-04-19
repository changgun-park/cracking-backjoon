const makePermutation = (arr, depth) => {
  if (depth === 1) return arr.map((el) => [el]);

  const results = [];
  arr.forEach((el, idx, origin) => {
    const permutations = makePermutation(
      origin.filter((_, i) => i !== idx),
      depth - 1
    );
    const attached = permutations.map((p) => [el, ...p]);
    results.push(...attached);
  });

  console.log(results);
};

const getPermutation = (arr, depth, permutation) => {
  if (depth === 0) {
    console.log(permutation);
  }

  arr.forEach((el, idx, origin) => {
    getPermutation(
      origin.filter((_, i) => i !== idx),
      depth - 1,
      [...permutation, el]
    );
  });
};

getPermutation([1, 2, 3, 4], 0, []);
