class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curSum=nums[0];
        let maxSum=nums[0];


        for(let i=1;i<nums.length;i++){
            let sum=nums[i]
            curSum=Math.max(sum,curSum+sum)
            maxSum=Math.max(maxSum,curSum)
            
        }

        return maxSum
    }
}
