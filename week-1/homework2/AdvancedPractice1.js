function practice_1(input) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (!result.hasOwnProperty(input[i])) {
      result[input[i]] = 1;
    } else {
      result[input[i]] = result[input[i]] + 1;
    }
  }
  return result;
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(practice_1(input1));
