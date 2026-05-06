class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const store = new Map();
 
        // plain for loop is faster than entries iterator. 
        for (const [indexS, value] of nums.entries()) {
            const guess = target - value;
           
            if(store.has(guess)) {
                // guess is always the lowest index, as it has been found earlier in 
                // the iterations
                return [store.get(guess), indexS]
            }
            store.set(value, indexS)
        }
        return []
    }
}
