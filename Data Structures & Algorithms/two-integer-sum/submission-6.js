class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const store = new Map();

        for (const [indexS, value] of nums.entries()) {
            const guess = target - value;
           
            if(store.has(guess)) {
                const storeIndex = store.get(guess)
                if (indexS < storeIndex) {
                    return [indexS, storeIndex];
                }
                return [storeIndex, indexS];
            }
            store.set(value, indexS)
        }
        return []
    }
}
