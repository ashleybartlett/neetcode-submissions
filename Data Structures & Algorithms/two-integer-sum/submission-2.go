import (
    "cmp"
    "slices"
)

func twoSum(nums []int, target int) []int {

    sortedNums := make([][2]int, len(nums))
    for i, num := range nums {
        sortedNums[i] = [2]int{num, i}
    }
    slices.SortFunc(sortedNums, func (i, j [2]int) int {
        return cmp.Compare(i[0], j[0])
    })

    left := 0
    right := len(sortedNums) - 1

    for left < right {
        guess := sortedNums[left][0] + sortedNums[right][0]
        fmt.Printf("%v -> %v + %v [%v, %v]\n", guess, sortedNums[left], sortedNums[right], left, right)
        if guess == target {
            break
        } else if guess < target {
        // } else if (guess > 0 && guess < target) || (guess < 0 && guess > target) {
            left++
        } else {
            right--
        }
    }
    if(sortedNums[left][1] < sortedNums[right][1]){
        return []int{sortedNums[left][1], sortedNums[right][1]}
    }
    return []int{sortedNums[right][1], sortedNums[left][1]}
}
