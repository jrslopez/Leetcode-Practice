let haystack = "leetcode",
  needle = "leet"

let i = 0,
  pointer = 0,
  occurrence = -1

// answer = haystack.indexOf(needle)

// console.log(answer)

//iterate thru string with index i
//pointer for needle is set to 0 as default
//occurrence = -1 as default
//compare string[i] to to needle[pointer]
//if string[i] == needle[pointer], we increment pointer, and occurrence = i
//if string[i] != needle[pointer], pointer = 0 and occurence resets to = -1
//return occurrence

while (i <= haystack.length && pointer < needle.length) {
  if (haystack[i] == needle[pointer] && occurrence == -1) {
    pointer += 1
    occurrence = i
  } else if (haystack[i] == needle[pointer]) {
    pointer += 1
  } else {
    pointer = 0
    occurrence = -1
  }

  i++
}

console.log(occurrence)

//need KMP algorithm??
