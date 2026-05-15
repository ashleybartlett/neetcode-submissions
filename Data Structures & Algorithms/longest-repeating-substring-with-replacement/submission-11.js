class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;

        let maxC = s[0];
        const chars = new Map();

        for (let r = 0; r < s.length; r++) {
            const currCharCount = (chars.get(s[r]) || 0) + 1
            chars.set(s[r], currCharCount);

            if(currCharCount > chars.get(maxC)) {
                maxC = s[r];
            }

            if( (r - l + 1) - chars.get(maxC) > k ) {
                chars.set(s[l], chars.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1);
        
        }
        return res
    }
}
