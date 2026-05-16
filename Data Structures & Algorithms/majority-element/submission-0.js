class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        let map1 = new Map()


        for (let num of nums){

            map1.set(num,(map1.get(num) || 0 ) + 1)

        }

         return [...map1.keys()].sort((a,b) => map1.get(b) - map1.get(a) )[0]
    }
}
