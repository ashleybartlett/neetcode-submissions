func letterBreakdown(s string) map[rune]int {
    letters := make(map[rune]int)
    for _, r := range s {
        letters[r]++
    }
    return letters
}

func isAnagram(s string, t string) bool {
    leftS := letterBreakdown(s)
    rightT := letterBreakdown(t)

    if len(leftS) != len(rightT) {
        return false
    }

    for letter, count := range leftS {
        if count != rightT[letter] {
            return false
        }
    }
    return true
}
