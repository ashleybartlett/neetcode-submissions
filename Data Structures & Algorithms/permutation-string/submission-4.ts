class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s2.length < s1.length) { 
            return false
        }

        const aCode = 'a'.charCodeAt(0);

        const leftMatch = Array.from({length: 26}, () => 0);
        const rightMatch = new Array(26).fill(0);

        let matches = 0;

        for(let i = 0; i < s1.length; i++) {
            leftMatch[s1.charCodeAt(i) - aCode]++;
            rightMatch[s2.charCodeAt(i) - aCode]++;
        }

        for(let i = 0; i < rightMatch.length; i++) {
            if(leftMatch[i] === rightMatch[i]) {
                matches++
            }
        }

        let l = 0;
        for(let r = s1.length; r < s2.length; r++) {
            if(matches === 26) {
                return true
            }

            const rIndex = s2.codePointAt(r) - aCode;
            rightMatch[rIndex]++
            if (rightMatch[rIndex] === leftMatch[rIndex]) {
                matches++
            } else if (rightMatch[rIndex]-1 === leftMatch[rIndex]) {
                matches--
            }

            const lIndex = s2.codePointAt(l) - aCode;
            rightMatch[lIndex]--
            if(rightMatch[lIndex] === leftMatch[lIndex]) {
                matches++
            } else if(rightMatch[lIndex]+1 === leftMatch[lIndex]) {
                matches--
            }
            l++

        }
        return matches === 26;
    }
}
