class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxS = 0;

        let l = 0,
            r = 0;

        let seen = new Set();

        while (r < s.length) {
            if (seen.has(s[r])) {

                while (seen.has(s[r])) {
                    seen.delete(s[l]);
                    l++;
                }
            }

            seen.add(s[r])
            r++;
            maxS = Math.max(maxS, r - l);
        }
        return maxS;
    }
}
