class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;

        let maxWater = 0;

        while (start < end) {
            let curWater = 0;
            let curLength = end - start;


            let containerHeight=Math.min(heights[start], heights[end]);
            curWater=containerHeight * curLength
            maxWater= Math.max(curWater,maxWater)


            if(heights[start]<heights[end]){
                start++
            }else{
                end--
            }
        }
        return maxWater;
    }
}
