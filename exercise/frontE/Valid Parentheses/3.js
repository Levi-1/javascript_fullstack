/**
 * @param {string} s
 * @return boolean
 */
var isValid = function(s) {
    var n = s.length
    var max = 0
    var t_max = 0
    var sum = 0
    if (!s || s.length < 1) return true
    for (var i = 0 ; i < n ; i++) {
        var c = s[i]
        if (c == '(') { // bug
            sum++
        }
        if(c == ')') {
            if(sum == 0){
                if(max < t_max)
                    max = t_max
                t_max = 0
                sum = 0
            }
            else{
               sum--
               t_max = t_max + 2 
            }
        }
    }
    max = max < t_max ? t_max : max
    return max
}

console.log(isValid("()(()"))