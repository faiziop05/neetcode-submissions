class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let string1= s.split('').sort().join('')
        let string2= t.split('').sort().join('')

        return string1 === string2
    }
}
