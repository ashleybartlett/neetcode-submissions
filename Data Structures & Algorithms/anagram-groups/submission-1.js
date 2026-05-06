class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map(); // {charArray: [anagram]}
        const seenChars = new Map(); // {char: index}

        const getCharIdx = (char) => {
            if (seenChars.has(char)) {
                return seenChars.get(char);
            }
            const thisCharIdx = seenChars.size;
            seenChars.set(char, thisCharIdx);
            return thisCharIdx;
        };

        // iterate strings, get character count,
        for (const s of strs) {
            console.log(`Processing: ${s}`)
            // leverage JS sparse arrays
            // Array<[char, count]>
            const charArray = [];
            for (const l of s.split("")) {
                const ci = getCharIdx(l);
                if(charArray[ci]) {
                    charArray[ci][1] += 1;
                } else {
                    charArray[ci] = [l, 1];
                }
            }
            console.log(`charArray: `, charArray)
            const charKey = charArray.reduce((ana, curr) => {
                if(!curr) { return ana }
                return ana + curr[0].repeat(curr[1])
            }, "")
            let groupEntry = groups.get(charKey);
            if(groupEntry === undefined ) {
                groupEntry = []
                groups.set(charKey, groupEntry)
            }
            groupEntry.push(s)
        }

        console.log("group map: ", groups)
        return groups.values().toArray();
    }
}
