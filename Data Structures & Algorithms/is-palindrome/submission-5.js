function isAlpha(char) {
    return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") || 
        (char >= "0" && char <= "9")
    );
}
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !isAlpha(s[l])) {
                l++;
            }
            while (r > l && !isAlpha(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                console.log(`Not a match ${s[l]} != ${s[r]}, [${l}, ${r}]`);
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
