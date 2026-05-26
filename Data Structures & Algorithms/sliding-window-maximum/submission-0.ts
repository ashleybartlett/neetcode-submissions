class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const output = []
        const q = []
        let l = 0,
            r = 0;

        while (r < nums.length) {
            // clean up q, based on current number. If lower, add, else remove
            while (q.length && nums[q.at(-1)] < nums[r]) {
                q.pop();
            }
            q.push(r);

            if(l > q[0]) {
                // has been updated in nodejs V8 impl to be O(1)
                q.shift()
            }

            // only update output when r is outside the sliding window
            // then start bringing l pointer along for the ride.
            if(r + 1 >=k) {
                output[l] = nums[q[0]]
                l++
            }

            r++
        }

        return output
    }
}
