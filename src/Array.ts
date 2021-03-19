/*
  数组类
 */

function swap(arr: any[], a: number, b: number): void {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}


/**
 * 买卖股票的最佳时机2
 * @param prices 股票信息数组
 */
function maxProfit(prices: number[]): number {

  let res: number = 0
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
  while (right < nums.length) {
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
    } else if (nums[j] === nums[i] && flag) {
      flag++
    } else {
      nums[++i] = nums[j]
      flag = 0
    }
  }
  return i + 1
}

/**
 * 颜色分类(三指针)
 * @param nums
 * left负责0,right负责2,0,2排好后1自然排好,注意边界条件
 */
function sortColors(nums: number[]): void {

  let cur = 0, left = 0, right = nums.length - 1
  while (left < right && cur <= right) {
    if (nums[cur] == 1) {
      cur++
    } else if (nums[cur] == 2) {
      swap(nums, cur, right--)
    } else {
      swap(nums, cur++, left++)
    }
  }
}

/**
 * 验证回文字符串
 * @param s
 */
function isPalindrome(s: string): boolean {
  let reg = /[a-zA-Z0-9]/
  let left = 0, right = s.length - 1
  while (left < right) {
    while (!reg.test(s.charAt(left)) && left < right) left++
    while (!reg.test(s.charAt(right)) && left < right) right--
    if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
      return false
    }
    left++
    right--
  }
  return true
}

/**
 * 反转字符串中的元音字母
 * @param s
 */
function reverseVowels(s: string): string {
  const arr = s.split('')
  const vowelSet = new Set()
  vowelSet.add('a').add('e').add('i').add('o').add('u')
  let left = 0, right = s.length - 1
  while (left < right) {
    if (vowelSet.has(arr[left].toLowerCase())) {
      if (vowelSet.has(arr[right].toLowerCase())) {
        swap(arr, left, right)
        left++
        right--
      } else {
        right--
      }
    } else {
      left++
    }
  }
  return arr.join('')
}

/**
 * 盛最多水的容器
 * 双指针，移动指针时总是应该移动较小值
 * @param height
 */
function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1,
    res = (right - left) * Math.min(height[left], height[right]),
    temp
  while (left < right) {
    height[left] < height[right] ? left++ : right--
    let min = Math.min(height[left], height[right]),
      length = right - left
    temp = min * length
    res = Math.max(res, temp)
  }
  return res
}

/**
 * 数组中的第K个最大元素
 * @param nums
 * @param k
 */
function findKthLargest(nums: number[], k: number): number {
  for (let i = 0; i < k; ++i) {
    for (let j = 0; j < nums.length - i - 1; ++j) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
      }
    }
  }
  return nums[nums.length - k]
}

/**
 * 合并两个有序数组
 * m,n是nums1,nums2的大小
 * 你可以假设 nums1 的空间大小等于 m + n
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 从后往前
  let i = m - 1, j = n - 1, cur = m + n - 1
  while (i >= 0 && j >= 0) {
    nums1[cur--] = nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--]
  }
  while (j >= 0) {
    nums1[cur--] = nums2[j--]
  }
}

/**
 * 多数元素
 * 给定的数组总是存在多数元素
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素
 * @param nums
 */
function majorityElement(nums: number[]): number {
  let candidate = nums[0]
  let count = 0
  for (let i = 1; i < nums.length; ++i) {
    nums[i] === candidate ? count++ : count--
    if (count <= 0) {
      candidate = nums[i]
    }
  }
  return candidate
}
