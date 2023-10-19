let nums = [1, 2, 3, 4]

//console.log(nums.indexOf(nums[0], 1))

//O(N^2)
// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i], i + 1) != -1) {
//       return true
//     }
//   }
//   return false
// }

//O(N)
const containsDuplicate2 = (nums) => {
  const setNums = new Set(nums)
  console.log(setNums.size)
  if (setNums.size != nums.length) {
    return false
  }

  return false
}

console.log(containsDuplicate2(nums))
//containsDuplicate2(nums)
