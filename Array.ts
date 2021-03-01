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

/**
 * 删除排序数组中的重复值
 * @param nums
 * @return 删除后数组的新长度
 */
function removeDuplicates(nums: number[]): number {

  let i = 0
  for (let j = 1; j < nums.length; ++j) {
    let item = nums[j]
    if (nums[i] !== item) {
      nums[++i] = item
    }
  }
  return i + 1

  /*方法2 splice*/
  // for (let i = 1; i < nums.length; ++i) {
  //   if(nums[i] === nums[i - 1]) {
  //     nums.splice(i, 1)
  //     i--
  //   }
  // }
  // return nums.length
}

/**
 * 删除排序数组中的重复值2，每个元素最多出现2次
 * @param nums
 * @return 删除后数组的新长度
 */
function removeDuplicates2(nums: number[]): number {

  let i = 0, flag = 0
  for (let j = 1; j < nums.length; ++j) {
    if (nums[j] === nums[i] && !flag) {
      nums[++i] = nums[j]
      flag++
    } else if(nums[j] === nums[i] && flag) {
      flag++
    } else {
      nums[++i] = nums[j]
      flag = 0
    }
  }
  return i + 1
}
