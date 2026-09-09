class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let map=new Map()
        for(let letter of s){
            if(map.has(letter)){
                map.set(letter,map.get(letter) + 1)
            }else{
                map.set(letter,1)
            }
        }

        for(let letter of t){
            if(map.has(letter) && map.get(letter) > 1){
                map.set(letter,map.get(letter) - 1)
            }else{
                map.delete(letter)
            }
        }


        return [...map.values()].length === 0 
    }
}
