
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let l = 0;
        let r = cleanS.length - 1;

        while (l < r) {
            if (cleanS[l] !== cleanS[r]) {
                console.log(`Not a match ${cleanS[l]} != ${cleanS[r]}, [${l}, ${r}]`);
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
