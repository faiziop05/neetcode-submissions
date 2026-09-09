class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false;
        let newMap=new Map()
        let newMap2=new Map()
        for(let a=0;a<s.length;a++){
            newMap.set(s[a],Number(newMap.get(s[a])|| 0) + 1)
            newMap2.set(t[a],Number(newMap2.get(t[a])|| 0) + 1)
        }
        if(newMap.size != newMap2.size) return false;
        for( let [key,value] of newMap){
            if(!newMap2.has(key) || newMap2.get(key) != value) return false

        }


return true
}
}
