func characterReplacement(s string, k int) int {
    res := 0
    chars := make(map[byte]int, 26);
    l := 0
    maxC := s[0];

    for r := 0; r < len(s); r++ {
        chars[s[r]] += 1

        if chars[s[r]] > chars[maxC] {
            maxC = s[r]
        }

        if (r - l + 1) - chars[maxC] > k {
            chars[s[l]] -= 1
            l++
        }
        res = max(res, r - l + 1)
    }

    return res
}
