class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        const obj1 = {};


        for (let word of strs){

            let key = word.split("").sort().join("")


            if (!obj1[key]){
                obj1[key] = []
            }

            obj1[key].push(word)

        }

        return Object.values(obj1)


    } 
}