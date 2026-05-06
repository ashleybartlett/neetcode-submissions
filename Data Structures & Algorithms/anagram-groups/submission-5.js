class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map(); // <string, Array<anagram: string>>

        for (const s of strs) {
            const key = s.split("").sort().join("");
            let gEntry = groups.get(key);
            if(!gEntry) {
                gEntry = []
                groups.set(key, gEntry)
            }
            gEntry.push(s)
            // console.log("key: ", key, " entry: ", gEntry)
        }
        // console.log("groups: ", groups)
        return groups.values().toArray();
    }
}
