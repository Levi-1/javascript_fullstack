function longestValidParentheses(s) {
    if (!s || s.length < 1 ) return 0 
    var left = right = max = 0
    for (var i = 0 ; i < s.length; i++) {
        if(s[i] == '(') {
            left++
        } else {
            right++
        }
        if (left == right) {
            max = Math.max(max, 2*right)
        } else if (right > left) {
            left = right = 0
        }
    }
    left = right = 0
    for (var i = s.length-1 ; i >= 0; i--) {
        if(s[i] == ')') {
            right++
        } else {
            left++
        }
        if (left == right) {
            max = Math.max(max, 2*left)
        } else if (right < left) {
            left = right = 0
        }
    }
    return max
}

console.log(longestValidParentheses())