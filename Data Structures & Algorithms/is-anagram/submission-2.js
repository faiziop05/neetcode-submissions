class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let map1= new Map();
        let map2= new Map();

        for(let ch =0;ch<s.length;ch++){
            map1.set(s[ch],Number((map1.get(s[ch]) || 0) + 1))
            map2.set(t[ch],Number((map2.get(t[ch]) || 0) + 1))
        }
        if(map1.size != map2.size) return false

        for (let [key,value] of map1){
            if(!map2.has(key) || map2.get(key) != value) return false
        }
        return true
    }
}
