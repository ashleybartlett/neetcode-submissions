class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // find longest repeating string, with up to K gap
        let maxSeq = 0;
        // let r = 0;
        let l = 0,
            r = 0;
        let seenChars = new Map();
        let commonChar = s[r];

        while (r < s.length) {
            seenChars.set(s[r], (seenChars.get(s[r]) || 0) + 1);

            if (s[r] !== commonChar) {
                if (seenChars.get(s[r]) > seenChars.get(commonChar)) {
                    commonChar = s[r];
                }
            }

            const diff = r - l + 1 - seenChars.get(commonChar);
            // console.log(
            //     `s[r]=${s[r]};l=${l}; r=${r}; maxSeq=${maxSeq}, seenChars=`,
            //     seenChars,
            //     `commonChar`,
            //     commonChar,
            //     "diff",
            //     diff,
            // );
            if (diff > k) {
                seenChars.set(s[l], seenChars.get(s[l]) - 1);
                l++;
            }
            maxSeq = Math.max(maxSeq, r - l + 1);
            r++;
        }
        return maxSeq;
    }
}
