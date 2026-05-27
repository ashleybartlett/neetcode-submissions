func isValid(s string) bool {
    stack := make([]rune, 0)
    closedBrackets := map[rune]rune{
        '}': '{',
        ']': '[',
        ')': '(',
    }

    for _, char := range s {
        if expectedOpenChar, exists := closedBrackets[char]; exists {
            if(len(stack) == 0) {
                return false
            }
            prevBrack := stack[len(stack) - 1]
            if expectedOpenChar != prevBrack {
                fmt.Printf("[%q] %q != %q, %v", char, expectedOpenChar, prevBrack, stack)
                return false
            }
            stack = stack[:len(stack) - 1]
        } else {
            stack = append(stack, char)
        }
    }
    return len(stack) == 0
}
