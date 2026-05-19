func trap(height []int) int {
    
    left := make([]int, len(height))
    right := make([]int, len(height))
    maxLeft, maxRight := 0, 0

    for i := 0; i < len(height); i++ {
        maxLeft = max(maxLeft, height[i])
        left[i] = maxLeft;

        rIndex := len(height) - 1 - i
        maxRight = max(maxRight, height[rIndex])
        right[rIndex] = maxRight;
    }

    res := 0

    for i := 0; i < len(height); i++ {
        level := min(left[i], right[i]) - height[i]
        if level > 0 {
            res += level
        }
    }
    return res
}
