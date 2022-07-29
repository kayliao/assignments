function practice_3(input) {
  let result = input.reduce((ans, current) => {
    if (!ans.hasOwnProperty(current.key)) {
      ans[current.key] = [current.value];
      return ans;
    } else {
      ans[current.key].push(current.value);
      return ans;
    }
  }, {});

  return result;
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(practice_3(input3));
