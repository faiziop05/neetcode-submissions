class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regExp=/[^a-zA-Z0-9]/g
        const normalizedString=s.replace(regExp,"").toLowerCase()
        let p1=0;
        let p2=normalizedString.length-1;

        while(p1<=p2){
            if(normalizedString[p1]===normalizedString[p2]){
                console.log(normalizedString[p1], normalizedString[p2])
                p1++;
                p2--
            }else{
                return false
            }
        }
        return true
    }
}
