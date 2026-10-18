class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length<2 && s.length> 0) return false
        let stack=[];

        for(let item of s){
            if(item === "{" || item === "(" || item === "["){
                stack.push(item)
            }else{
                switch(item){
                    case "}":
                        if(stack.at(-1)==="{"){
                             stack.pop()
                        }else{
                            return false
                        }
                        break
                    case ")":
                        if(stack.at(-1)==="("){
                             stack.pop()
                        }else{
                            return false
                        }
                        break
                    case "]":
                        if(stack.at(-1)==="["){
                             stack.pop()
                        }else{
                            return false
                        }
                        break
                    default :
                        stack=stack
                        break
                }
            }
        }
        return stack.length === 0
    }
}
