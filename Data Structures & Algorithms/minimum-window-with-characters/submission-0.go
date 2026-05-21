// import "math"

func minWindow(s string, t string) string {
    if len(s) < len(t) {
        return ""
    }

    tChars := make(map[byte]int)
    foundChars := make(map[byte]int)
    
    for char := 0; char < len(t); char++ {
        tChars[t[char]]++
    }

    found := 0
    need := len(tChars)
    res := []int {-1, -1}
    resLen := math.MaxInt

    l := 0
    for r := 0; r < len(s); r++ {
        currChar := s[r]

        foundChars[currChar]++
        if tCharCount, exists := tChars[currChar]; exists {
            if foundChars[currChar] == tCharCount {
                found++
            }
        }

        for found == need {
            if r - l + 1 < resLen {
                resLen = r - l + 1
                res = []int {l, r}
            }

            foundChars[s[l]]--
            if tCharCount, exists := tChars[s[l]]; exists {
                if foundChars[s[l]] < tCharCount {
                    found--
                }
            }
            l++
        }
        
    }
    if res[0] == -1 {
        return ""
    } else {
        return s[res[0]:res[1] + 1]
    }
}
