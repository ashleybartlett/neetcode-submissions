func isAnagram(s string, t string) bool {

    if len(s) != len(t) {
        return false
    }
    letterCounts :=  make(map[byte]int)

    for i := 0; i < len(s); i++ {
        letterCounts[s[i]]++
        letterCounts[t[i]]--
    }

    for _, count := range letterCounts {
        if count != 0 {
            return false
        }
    }
    return true
}
