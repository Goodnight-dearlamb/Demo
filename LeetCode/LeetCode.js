// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

let sum = function(arr, num) {
  for(let i = 0; i < arr.length; ++i) {
    for(let j = 0; j < arr.length; ++j) {
      if (i === j) {
        return;
      }
      if (i + j === num) {
        const a = [i, j];
        return a;
      }
    }
  }
}

sum([1, 2, 3, 4, 5], 4)
