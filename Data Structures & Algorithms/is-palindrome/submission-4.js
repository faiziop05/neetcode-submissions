class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let p1 = 0;
        let p2 = string.length - 1;
        while (p1 <= p2) {
            if (string[p1] == string[p2]) {
                p1++;
                p2--;
            } else {
                return false;
            }
        }
        return true;
    }
}
