function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    let neededNum = target - firstNum;

    if (nums.includes(neededNum)) {
      let index = nums.indexOf(neededNum);
      if (index !== i) {
        return (result = [i, index]);
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
