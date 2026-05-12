func lengthOfLongestSubstring(s string) int {
    // range extracts runes, not bytes
    runeS := []rune(s)
    charSet := make(map[rune]bool);

    l, maxS := 0, 0;

    for r, char := range s {
        for charSet[char] {
            delete(charSet, runeS[l])
            l++
        }
        charSet[char] = true
        maxS = max(maxS, r-l + 1)
    }

    return maxS
}
