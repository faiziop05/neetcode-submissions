class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=0;

        let start=0;
        let end = heights.length-1

        while(start<end){
            let minHeight= Math.min(heights[start],heights[end])

            let curMax=minHeight*(end-start)

            if(curMax>max){
                max=curMax
            }

            if(heights[start]<heights[end]){
                start++
            }else{
                end--
            }

        }


        return max
    }
}
