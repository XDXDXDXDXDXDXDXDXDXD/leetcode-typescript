/**
 * 最长公共前缀
 * @param strs
 */
function longestCommonPrefix(strs: string[]): string {
  if (!strs || !strs.length) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let index = 0
  let base = strs[0]
  let flag = false
  while(true) {
    for (let i = 1; i < strs.length; ++i) {
      if (index > strs[i].length) {
        flag = true
        break
      }
      if (base[index] !== strs[i][index]) {
        flag = true
        break
      }
    }
    if (flag) break
    index++
  }
  return strs[0].substring(0, index)
}


