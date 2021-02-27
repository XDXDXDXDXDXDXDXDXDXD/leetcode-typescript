/*
  数组类
 */

/**
 * 买卖股票的最佳时机2
 * @param prices 股票信息数组
 */
function maxProfit(prices: number[]): number {

  let res : number = 0
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] < prices[i + 1]) {
      res += prices[i + 1] - prices[i]
    }
  }
  return res
}

/**
 * 移动零
 * 双指针，做指针维护已完成，右指针维护待完成
 * @param nums 输入数组
 */
function moveZeroes(nums: number[]): void {

  let left = 0, right = 0;
  while(right < nums.length) {
    if (nums[right] !== 0) {
      let temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
    right++
  }
}
