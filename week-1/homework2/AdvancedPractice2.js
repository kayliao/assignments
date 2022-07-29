function practice_2(input, mapping) {
  const result = arr.map((value) => {
    return mapping[value];
  });
  return result;
}

const arr = ["a", "b", "c", "a", "b"];
const mapping = { a: 1, b: 2, c: 3 };
console.log(practice_2(arr, mapping));
