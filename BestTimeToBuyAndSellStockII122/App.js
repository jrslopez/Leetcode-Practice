let prices = [1, 2, 3, 4, 5]

let profit = 0

for (let i = 1; i < prices.length; i++) {
  let previousPrice = prices[i - 1]
  let currentPrice = prices[i]
  if (previousPrice < currentPrice) {
    profit += currentPrice - previousPrice
  }
}

console.log(profit)
