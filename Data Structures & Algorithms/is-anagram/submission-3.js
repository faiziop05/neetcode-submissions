class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const firstString=s.split("").sort().join()
        const secondString=t.split("").sort().join()
if(firstString===secondString) {
    return true
}
return false
    }
}
