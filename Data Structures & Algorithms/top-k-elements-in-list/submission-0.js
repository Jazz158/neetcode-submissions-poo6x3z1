class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let count = new Map();


        for (let num of nums){
            count.set(num,(count.get(num) || 0) + 1)


        }


       return  [...count.keys()].sort((a,b) => count.get(b) - count.get(a)).slice(0,k)


        
    }
}
