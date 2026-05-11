class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.toSorted((a, b) => a - b)
        const found = new Set();

        for ( let i = 0; i < sorted.length; i++) {
            // Can never equal 0 once left index is above it
            if (sorted[i] > 0) break;
            // if `i` is same as previous, continue to next to avoid duplicates
            if (i > 0 && sorted[i] === sorted[i-1]) continue

            let j = i+1,
                k = sorted.length - 1;
            
            // target = 0
            // same as sorted[i] = -(sorted[j] + sorted[k])
            // which is equivalent -sorted[i] = sorted[j] + sorted[k]
            const target = -sorted[i];

            while (j < k) {
                const guess = sorted[j] + sorted[k];
                if (guess === target) {
                    found.add([sorted[i], sorted[j], sorted[k]])
                    j++
                    k--
                    while (j < k && sorted[j] == sorted[j-1]) {
                        j++
                    }
                } else if (guess > target) {
                    k--
                } else {
                    j++
                }
            }
        }

        return found.values().toArray();
    }
}
