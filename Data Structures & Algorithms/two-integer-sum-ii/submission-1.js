class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0,
            right = numbers.length - 1;

        while(left < right) {
            const guess = numbers[left] + numbers[right]
            if ( guess > target) {
                right--
            } else if (guess < target) {
                left++
            } else {
                return [left + 1, right + 1]
            }
        }
        // console.log(`no solution found: `, left, right, numbers[left], numbers[right])
        return []

    }
}
