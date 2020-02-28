/**
 * @param {string} s
 * @return boolean
 */
var isValid = function(s) {
    if (!s || s.length < 1) return true
    var n = s.length
    const stack = []
    for (var i = 0 ; i < n ; i++) {
        var c = s[i]
        if (c == '(') {
            stack.push(c)
        }
        if(c == ')') {
            if (stack.length < 1) // 在stack为空时出现右括号直接判断
                return false
            stack.pop()
        }
    }
    if (stack.length < 1) {
        return true
    }
    else {
        return false
    }
}