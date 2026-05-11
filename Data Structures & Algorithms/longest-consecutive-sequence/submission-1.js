class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let longest = 0;

        for(let n of seen) {
            // only update seen if previous not set (i.e start of longest)
            if(!seen.has(n - 1)) {
                let length = 1
                // calculate current longest streak
                while (seen.has(n+length)) {
                    length++
                }
                longest = Math.max(longest, length)
            }
        }

        return longest;
    }
}
