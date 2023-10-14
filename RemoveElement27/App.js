let nums = [1]

let l = 0
let r = nums.length - 1
let temp

val = 1

while (l <= r) {
  if (nums[l] == val) {
    temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp

    nums.pop()
    r--
    l--
  }

  l++
}

console.log(nums)
