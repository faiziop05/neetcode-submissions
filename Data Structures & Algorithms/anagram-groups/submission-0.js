class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map=new Map();

        for(let i=0;i<strs.length;i++){
            let sortedItem=strs[i].split('').sort().join('')
            if(map.has(sortedItem)){
                    map.set(sortedItem, [...map.get(sortedItem),strs[i]])
            }else{
                map.set(sortedItem, [strs[i]] )
            }
        }
 
        return [...map.values()]
    }
}
