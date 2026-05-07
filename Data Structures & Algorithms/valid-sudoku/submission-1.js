class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const checks = new Map();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];
                if (val === ".") {
                    continue;
                }

                if (checks.has(`row${row},${val}`)) {
                    return false;
                }
                checks.set(`row${row},${val}`, true);

                if (checks.has(`col${col},${val}`)) {
                    return false;
                }
                checks.set(`col${col},${val}`, true);

                const squareKey = `${Math.floor(row / 3)},${Math.floor(col / 3)},${val}}`;
                if (checks.has(squareKey)) {
                    return false;
                }
                checks.set(squareKey, true)
            }
        }
        return true;
    }
}
