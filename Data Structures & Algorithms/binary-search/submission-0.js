class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 0) return -1

        let start = 0;
        let end = nums.length-1;
        let mid = Math.floor(end/2)
        while(start<=end){
            mid = Math.floor((start+end)/2)
            if(nums[mid]==target) return mid
            else if(target<nums[mid]) end = mid -1
            else if(target>nums[mid]) start = mid + 1
        }

        return -1
        
    }
}
