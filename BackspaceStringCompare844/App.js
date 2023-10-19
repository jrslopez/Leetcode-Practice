let s = "a##c"
let t = "#a#c"

const isEqual = (s, t) => {
  let newS = ""
  let newT = ""
  let backspace = 0
  let bkspc = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "#") {
      backspace++
    } else if (backspace > 0) {
      backspace--
    } else newS = s[i] + newS
  }

  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] == "#") {
      bkspc += 1
    } else if (backspace > 0) {
      bkspc -= 1
    } else newT = t[i] + newT
  }

  if (newS == newT) {
    return true
  }

  return false
}

console.log(isEqual(s, t))
