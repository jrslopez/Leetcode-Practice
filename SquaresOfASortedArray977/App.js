nums1 = [-1, -2, -3, 1, 2, 3]

let l = 0
let r = nums1.length - 1
let k = nums1.length - 1

let resultArr = new Array(nums1.length)

while (k != -1) {
  if (Math.abs(nums1[l]) > Math.abs(nums1[r])) {
    resultArr[k] = nums1[l] ** 2
    k--
    l++
  } else {
    resultArr[k] = nums1[r] ** 2
    k--
    r--
  }
}

console.log(resultArr)
