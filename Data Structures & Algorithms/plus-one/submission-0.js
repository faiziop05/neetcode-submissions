class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let number=String(Number(digits.join('')) + 1)
        let result=[];
        for(let i = 0;i<number.length;i++){
            result.push(Number(number[i]))
        }
        return number
    }
}
