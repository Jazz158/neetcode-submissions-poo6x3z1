class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {


        let set1 = new Set(nums);
        let longest = 0;


        for (let number of nums){
            if (!set1.has(number - 1)){
                let length = 1 ;
                while (set1.has(number + length)){
                    length ++
                }

                longest = Math.max(longest,length)

            }

        }
        return longest
        
          
        
    }
}
