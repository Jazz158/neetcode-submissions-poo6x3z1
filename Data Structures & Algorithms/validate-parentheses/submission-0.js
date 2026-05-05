class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];
        let map1 = {
            ")" : "(",
            "]" : "[",
            "}" : "{"

        }


        for (let char of s){
            if (char === "(" || char === "[" || char === "{" ){
                stack.push(char)
            }else if (stack.pop() !== map1[char] ){
                return false
            }
        }

        return stack.length === 0 
    }
}
