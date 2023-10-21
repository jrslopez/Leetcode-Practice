nums = [1, 1, 2]

let count = 0
// Loop for all the elements in the array
for (let i = 0; i < nums.length; i++) {
  // If the current element is equal to the next element, we skip
  if (nums[i] == nums[i + 1]) {
    continue
  }
  // We will update the array in place
  nums[count] = nums[i]
  count++
}
console.log(count)
