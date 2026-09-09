class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <= 1) return false
        if(s[0] == ")" || s[0] == "]" || s[0] == "}") return false
        let array=[]
        let arrayIndex=-1
        for(let i = 0; i< s.length; i++){
            if(array[arrayIndex]=="(" && s[i] == ")"){
                array.pop()
                arrayIndex--
            }
            else if(array[arrayIndex]=="{" && s[i] == "}"){
                array.pop()
                arrayIndex--

            }
            else if(array[arrayIndex]=="[" && s[i] == "]"){
                 array.pop()
                arrayIndex--
            }
            else{
                array.push(s[i])
                arrayIndex++
            }
        }

        console.log(array)
    return array.length > 0 ? false : true

    }

}
