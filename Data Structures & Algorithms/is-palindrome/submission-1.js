class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string1= s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let string2= s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('').reverse().join('')
        if(string1 === string2) return true
        return false
    }
}
