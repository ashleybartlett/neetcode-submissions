func letterBreakdown(s string) map[rune]int {
    letters := make(map[rune]int)
    for _, r := range s {
        letters[r]++
    }
    return letters
}

func isAnagram(s string, t string) bool {
    // leftS := letterBreakdown(s)
    // rightT := letterBreakdown(t)

    if len(s) != len(t) {
        return false
    }

    leftS := make(map[byte]int)
    rightT := make(map[byte]int)

    for i := 0; i < len(s); i++ {
        leftS[s[i]]++
        rightT[t[i]]++
    }

    for letter, count := range leftS {
        if count != rightT[letter] {
            return false
        }
    }
    return true
}
