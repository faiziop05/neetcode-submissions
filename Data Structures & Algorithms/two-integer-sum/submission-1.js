class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map=new Map();
        
        let indices=[];

        for(let i=0;i<nums.length;i++){
            for (let j=i + 1;j<nums.length;j++){
                if(nums[i]+nums[j]==target){
                    indices=[i,j]
                }
            }
        }
        return indices
    }
}
