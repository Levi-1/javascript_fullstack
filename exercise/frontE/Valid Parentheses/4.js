/**
 * 暴力解法 最长有效括号
 */
function longestValidParentheses(s) {
    var max = 0
    if (s.length == 0 || s.length == 1) return max
    var stack = [] // 使用栈来实现匹配 空间复杂度为O(n)
    // 嵌套循环
    // 每位括号的匹配长度适合有效匹配相同
    for (var i = 0; i < s.length; i++) {
        var tmpMax = 0 // 当前为括号的匹配长度 
    }
    return max
}