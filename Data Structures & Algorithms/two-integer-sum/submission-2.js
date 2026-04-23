class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let prevmap = new Map()


        for(let i = 0 ; i < nums.length; i++ ){
            let diff = target - nums[i]


            if (prevmap.has(diff)){
                return [prevmap.get(diff),i]

            }

            prevmap.set(nums[i],i)



        }

        return []
    }
}
