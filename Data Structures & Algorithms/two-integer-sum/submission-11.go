func twoSum(nums []int, target int) []int {
    // store nums in map, with value of index
    // compare target - num, if response in map, return indexes of current and map index

    storedNums := make(map[int]int, len(nums))

    for index, value := range nums {
        r := target - value

        if s, exists := storedNums[r]; exists {
            // stored index always comes first, given we iterator over list one way
            return []int{s, index}
        }
        storedNums[value] = index
    }

    return []int{}
}
