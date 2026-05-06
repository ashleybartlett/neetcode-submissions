class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = [] // Array<[num, count]>

        for (const n of nums ) {
            count[n] = (count[n] || 0) + 1
        }
        // console.log(count)

        for (const [num, c] of Object.entries(count)) {
            if(!freq[c]) {
                freq[c] = []
            }
            freq[c].push(parseInt(num))
        }

        // console.log(freq)
        const res = [];
        for(let i = freq.length -1; i > 0; i--) {
            if(!freq[i]) { continue }
            for (const n of freq[i]) {
                res.push(n);
                if(res.length === k) {
                    return res;
                }
            }
        }
        return res
    }
}
