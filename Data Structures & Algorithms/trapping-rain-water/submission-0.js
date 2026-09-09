class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let trapped = 0;

        let left = 0;
        let right = height.length - 1;

        let leftHigh = height[left];
        let rightHigh = height[right];

        while (left < right) {
            if (leftHigh < rightHigh) {
                left++;
                if(height[left]>=leftHigh){
                    leftHigh=height[left]
                }else{
                    trapped+=leftHigh-height[left]
                }
            } else {
                right--;

                if(height[right]>=rightHigh){
                    rightHigh=height[right]
                }else{
                    trapped+=rightHigh-height[right]
                }
            }
        }

        return trapped
    }
}
