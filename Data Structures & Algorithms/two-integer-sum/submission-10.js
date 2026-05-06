class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const store = new Map();
 
        // interestingly, for loop is faster than iterator!
        for (let indexS = 0; indexS < nums.length; indexS++) {
            const guess = target - nums[indexS];
           
            if(store.has(guess)) {
                // guess is always the lowest index, as it has been found earlier in 
                // the iterations
                return [store.get(guess), indexS]
            }
            store.set(nums[indexS], indexS)
        }
        return []
    }
}
