let s = "a##c"
let t = "#a#c"

var backspaceCompare = function (s, t) {
  return edit(s) === edit(t)

  function edit(str) {
    let result = ""
    let backspaces = 0

    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === "#") {
        backspaces += 1
      } else if (backspaces > 0) {
        backspaces -= 1
      } else {
        result = str[i] + result
      }
    }

    return result
  }
}

console.log(backspaceCompare(s, t))
