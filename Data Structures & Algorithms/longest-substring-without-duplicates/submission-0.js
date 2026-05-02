class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let set1 = new Set();

        let left = 0;
        let maxy = 0 
        

        for ( let right = 0 ; right < s.length; right ++  ){

            while (set1.has(s[right])){
                set1.delete(s[left])
                left++

            }




            set1.add(s[right])

            maxy = Math.max(maxy,right - left + 1)
        }
        return maxy
    }
}
