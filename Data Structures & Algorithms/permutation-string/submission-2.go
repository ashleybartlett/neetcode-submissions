func checkInclusion(s1 string, s2 string) bool {
    if len(s2) < len(s1) {
        return false
    }

    matchLeft := make(map[byte]int);
    matchRight := make(map[byte]int);
    totalMatches := 0;

    // setup counts of initial letters
    for i := range len(s1) {
        matchLeft[s1[i]]++
        matchRight[s2[i]]++
    }
    for char, count := range matchRight {
        lCount, exists := matchLeft[char]
        
        if !exists {
            delete(matchRight, char)
        } else if count == lCount {
            totalMatches++
        }
    }

    // fmt.Printf("matches: %v; expected: %v; matchLeft: %v\n", totalMatches, len(matchLeft), matchLeft)

    l := 0
    for r := len(s1); r < len(s2); r++ {
        // fmt.Printf("totalMatches: %v; window: %v; matchRight: %v\n", totalMatches, s2[l:r], matchRight)
        if totalMatches == len(matchLeft) {
            return true
        }

        rIndex := s2[r]
        
        if _, exists := matchLeft[rIndex]; exists {
            matchRight[rIndex]++;

            if matchRight[rIndex] == matchLeft[rIndex] {
                totalMatches++
            // remove existing match if currently is equal
            } else if matchRight[rIndex] - 1 == matchLeft[rIndex] {
                totalMatches--
            }
        }

        if _, exists := matchLeft[s2[l]]; exists {
            
            matchRight[s2[l]]--;

            if matchRight[s2[l]] == matchLeft[s2[l]] {
                totalMatches++
            } else if matchRight[s2[l]] + 1 == matchLeft[s2[l]] {
                totalMatches--
            }
        } 

        l++;
    }
    return totalMatches == len(matchLeft)
}
