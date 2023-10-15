let nums = [3, 3, 4]

let majority
let count = 0

for (let i = 0; i < nums.length; i++) {
  if (count == 0) {
    majority = nums[i]
    count++
  } else if (nums[i] != majority) {
    count--
  } else count++
}
console.log(majority)
