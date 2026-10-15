class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let list1 = {};
        let list2 = {};

        for (let key = 0; key < s.length; key++) {
            list1[s[key]] = (list1[s[key]] || 0) + 1;
            list2[t[key]] = (list2[t[key]] || 0) + 1;
        }

        for(let key in list1){
            if(list1[key] !== list2[key]) return false
        }
        return true
    }
}
