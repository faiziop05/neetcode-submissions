class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i in nums) {
            let needed = target - nums[i];
            if (map.has(needed)) {
                return [Number(map.get(needed)), Number(i)];
            }
            map.set(nums[i], i);
        }
    }
}
