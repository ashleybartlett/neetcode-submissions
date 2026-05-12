class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) {
            return 0;
        }
        let maxS = 1;

        let l = 0,
            r = 1;

        let seen = new Map([[s[l], l]]);

        while (r < s.length) {
            if (seen.has(s[r])) {
                // Was so close with original attempt. 
                // Didn't realise that when a repeating character is met, 
                // it's effectively always a new string. No need for cleanup
                l = Math.max(seen.get(s[r]) + 1, l)
            }
            seen.set(s[r], r);
            // poor mans for loop? Also sidesteps the +1 max count
            r++;r
            maxS = Math.max(maxS, r - l);
        }
        return maxS;
    }
}
