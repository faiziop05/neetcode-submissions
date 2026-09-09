class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let low=0
        let high=numbers.length-1

        let result=0
        while(low<high){
            result=numbers[low] + numbers[high]
            if(result === target) return [low + 1, high + 1]

            if(result > target) high--
            if(result < target) low++
        }
        return finalResult
    }
}
