class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let map1 = new Map();
        let left = 0 ;
        let maxfq = 0;
        let maxy = 0;

        for (let right = 0 ; right < s.length; right++){

            map1.set(s[right],(map1.get(s[right]) || 0 ) + 1)

            maxfq = Math.max(maxfq, map1.get(s[right]))

            while ( (right -left + 1) - maxfq  > k) {
                map1.set(s[left], map1.get(s[left]) - 1);
                left ++ 



            }
            maxy = Math.max(maxy,right - left + 1)


        }

        return maxy


    }
}
