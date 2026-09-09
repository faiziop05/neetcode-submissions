class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start=0;
        let end=numbers.length -1;
        let result=[]
        let sum=0;
        while(start<end){
             sum=numbers[start] + numbers[end]
            if(sum==target) result= [start+1,end+1]
            if(sum>target) end--
            else start++ 
        }

        return result
    }
}
