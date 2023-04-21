const [N, ...names] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const counter = {};
names.forEach((name) => {
  counter[name[0]] = counter[name[0]] ? counter[name[0]] + 1 : 1;
});

const result = Object.keys(counter)
  .filter((chr) => counter[chr] >= 5)
  .sort();

if (result.length > 0) {
  console.log(result.join(""));
} else {
  console.log("PREDAJA");
}
