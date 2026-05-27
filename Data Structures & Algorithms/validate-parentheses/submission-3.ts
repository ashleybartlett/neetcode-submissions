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
                const last = brackets.pop();
                if(last !== closedBrackets.get(char)) {
                    // console.log(`${char} / ${last} / ${closedBrackets.get(char)} - `, brackets)
                    return false
                } 

            } else {

                brackets.push(char);
            }
        }
        return brackets.length == 0
    }
}
