class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        
        let map=new Map()
        let diff;
        for(let i in nums){
            diff=target - nums[i];

           if(map.has(diff)){
            return [Number(map.get(diff)),Number(i)]
           }

            map.set(nums[i],i)
        }

        return []
    }
}
