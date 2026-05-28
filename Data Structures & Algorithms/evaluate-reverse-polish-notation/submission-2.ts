class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const calcStack: number[] = [];
        const validTokens = new Set(["+", "-", "/", "*"]);

        for (let token of tokens) {
            if (validTokens.has(token)) {
                let a = calcStack.pop();
                let b = calcStack.pop();
                switch (token) {
                    case "*":
                        calcStack.push(b * a);
                        break;
                    case "-":
                        calcStack.push(b - a);
                        break;
                    case "+":
                        calcStack.push(b + a);
                        break;
                    case "/":
                        calcStack.push(Math.trunc(b / a));
                        break;
                    default:
                        break;
                }
            } else {
                calcStack.push(Number.parseInt(token, 10));
            }
        }
        return calcStack.pop();
    }
}
