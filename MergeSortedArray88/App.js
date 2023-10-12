let nums1 = [0]
let nums2 = [1]

m = nums1.length - nums2.length
n = nums2.length

i = m - 1
j = n - 1
k = m + n - 1

function merge(nums1, m, nums2, n) {
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }

  return nums1
}

console.log(merge(nums1, m, nums2, n))
