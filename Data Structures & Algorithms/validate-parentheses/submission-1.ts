class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const brackets = [];

        for (let char of s) {
            if (char == "(" || char == "{" || char == "[") {
                brackets.push(char);
            } else {
                if (
                    (char == ")" && brackets.at(-1) == "(") ||
                    (char == "}" && brackets.at(-1) == "{") ||
                    (char == "]" && brackets.at(-1) == "[")
                ) {
                    brackets.pop();
                } else {
                    console.log(`${char} / ${brackets.at(-1)} - `, brackets)
                    return false;
                }
            }
        }
        return brackets.length == 0
    }
}
