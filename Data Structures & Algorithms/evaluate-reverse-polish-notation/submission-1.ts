class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const calcStack: number[] = [];
        let res: number;
        for (let token of tokens) {

			const parsed = Number.parseInt(token, 10);
			if (Number.isNaN(parsed)) {
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
				 calcStack.push(parsed);
			}
        }
        return calcStack.pop();
    }
}
