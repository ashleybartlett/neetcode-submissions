class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Map();
        let longest = 0;
        for(let n of nums) {
            // don't recalculate
            if(seen.has(n)) { continue }
            
            const prevN = seen.get(n-1) || 0;
            const nextN = seen.get(n+1) || 0;

            // next and previous should be positive integer if seen, otherwise undefined or 0
            let curr = prevN + nextN + 1;

            // update boundary numbers to highest
            if(prevN) { seen.set(n - prevN, curr) }
            if(nextN) { seen.set(n + nextN, curr) }
            seen.set(n, curr);
            longest = Math.max(longest, curr)
            // console.log(`setting ${n}: [${prevN}, ${nextN}]: ${currSeen}`)
            // console.log(seen)
        }

        return longest
    }
}
