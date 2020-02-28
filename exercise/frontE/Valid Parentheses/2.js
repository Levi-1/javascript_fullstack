/**
 * @param {string} s
 * @return boolean
 * 空间复杂度为O(1),不使用栈
 */
var isValid = function(s) {
    if (!s || s.length < 1) return true
    var n = s.length
    var sum = 0 // 使用一个变量取代stack
    for (var i = 0 ; i < n ; i++) {
        var c = s[i]
        if (c == '(') {
            sum++
        }
        if(c == ')') {
            if (sum == 0) // 在stack为空时出现右括号直接判断
                return false
            sum--
        }
    }
    if (sum == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isValid('(()()())'))