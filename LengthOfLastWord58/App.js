s = "    "

let count = 0

for (let i = s.length - 1; i >= 0; i--) {
  if (s[i] == " " && count == 0) {
    continue
  } else if (s[i] == " " && count > 0) {
    break
  }

  count += 1
}

console.log(count)
