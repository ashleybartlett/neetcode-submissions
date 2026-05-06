type empty struct{}
var sentinel = empty{}

func hasDuplicate(nums []int) bool {
    seen := make(map[int]empty, len(nums))
    for _, num := range nums {
        if _, exists := seen[num]; exists {
            return true
	    } else {
            seen[num] = sentinel
        }
    }
    return false

}
