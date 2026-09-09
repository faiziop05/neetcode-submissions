class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string= s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('');
        let isPalindrometrue=true;
        let p1=0;;
        let p2=string.length-1;

        console.log(string, p2)
        while(p1<p2){
            if(string[p1] !== string[p2]) isPalindrometrue=false;
            p1++;
            p2--;
        }

        return isPalindrometrue

    }
}
