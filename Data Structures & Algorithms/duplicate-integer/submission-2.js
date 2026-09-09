class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet=new Set(nums)
        let isEqual=nums.length == numsSet.size

        if(isEqual){
            return false
        }else if(!isEqual){
            return true
        }
    }
}
