class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const brackets = [];
        const closedBrackets = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])

        for (let char of s) {
            if(closedBrackets.has(char)) {
                if(brackets.at(-1) !== closedBrackets.get(char)) {
                    console.log(`${char} / ${brackets.at(-1)} / ${closedBrackets.get(char)} - `, brackets)
                    return false
                } 
                brackets.pop();
            } else {

                brackets.push(char);
            }
        }
        return brackets.length == 0
    }
}
