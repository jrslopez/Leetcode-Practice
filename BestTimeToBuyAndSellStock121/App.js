let prices = [1, 4, 1, 4, 3, 1]

let profit = 0
let highestProfit = 0
let lowestPrice = 0

for (let i = 0; i < prices.length; i++) {
  if (i == 0) {
    lowestPrice = prices[i]
  } else if (prices[i] < lowestPrice) {
    lowestPrice = prices[i]
  } else if (prices[i] > lowestPrice && profit > prices[i] - lowestPrice) {
    continue
  } else {
    profit = prices[i] - lowestPrice
  }

  if (profit > highestProfit) {
    highestProfit = profit
  }
}

console.log("final profit is ", highestProfit)
