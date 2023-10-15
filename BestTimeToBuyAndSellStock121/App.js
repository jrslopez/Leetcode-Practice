let prices = [3, 2, 1]

let profit = 0
let lowestPrice = 0
let highestPrice = 0

for (let i = 0; i < prices.length; i++) {
  if (i == 0) {
    lowestPrice = prices[i]
  } else if (prices[i] < lowestPrice) {
    lowestPrice = prices[i]
    profit = 0
    console.log("new lowest! ", lowestPrice, profit)
  } else if (prices[i] > lowestPrice && profit > prices[i] - lowestPrice) {
    continue
  } else {
    profit = prices[i] - lowestPrice
    console.log("new profit!", profit)
  }
}

console.log("final profit is ", profit)
