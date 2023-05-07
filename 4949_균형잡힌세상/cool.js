console.log(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .slice(0, -1)
    .map((x) => {
      const arr = [];
      for (let i = 0; i < x.length; i++)
        switch (x[i]) {
          case "(":
          case "[":
            arr.push(x[i] == "[");
            break;
          case ")":
          case "]":
            if (!arr.length || arr.pop() != (x[i] == "]")) return "no";
            break;
        }
      return arr.length ? "no" : "yes";
    })
    .join("\n")
);
