func lengthOfLongestSubstring(s string) int {
    charSet := make(map[byte]bool);

    l, maxS := 0, 0;

    for r := 0; r < len(s); r++ {
        for charSet[s[r]] {
            delete(charSet, s[l])
            l++
        }
        charSet[s[r]] = true
        maxS = max(maxS, r-l + 1)
    }

    return maxS
}
