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

        // let seen = new Set();
        let seen = new Map([[s[l], l]]);

        while (r < s.length) {
            if (seen.has(s[r])) {
                // cleanup previously seen unique letters
                // console.log(`Cleanup [${l}, ${r}]: ${s[r]}`)
                // console.log("Seen", seen)
                while (seen.has(s[r])) {
                    seen.delete(s[l]);
                    l++;
                }
                // console.log("Seen after", seen)
                // l=seen.get(s[r]); // move to right of duplicate
                // seen = new Set([s[r]]);
            }

            seen.set(s[r], r);

            r++;
            maxS = Math.max(maxS, r - l);
        }
        return maxS;
    }
}
