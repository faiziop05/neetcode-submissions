class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
       let maxSum=nums[0];
       let curSum=nums[0];

       for(let i = 1; i< nums.length;i++ ){
            curSum=Math.max(nums[i], nums[i] + curSum)
            maxSum=Math.max(maxSum, curSum)
       }

       return maxSum
    }

}