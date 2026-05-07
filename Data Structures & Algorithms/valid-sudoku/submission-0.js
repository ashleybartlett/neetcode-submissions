function createRowCheck() {
    return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false));
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = createRowCheck();
        const cols = createRowCheck();
        const boxes = createRowCheck();

        // console.log("rows: ", rows);
        // console.log("cols: ", cols);
        // console.log("boxes: ", boxes);
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] !== ".") {
                    const d = parseInt(board[row][col]) - 1;
                    if (rows[row][d]) {
                        return false;
                    }
                    rows[row][d] = true;
                    if (cols[col][d]) {
                        return false;
                    }
                    cols[col][d] = true;

                    const box =  Math.floor(row / 3) * 3 + Math.floor(col / 3);
                    // console.log(`[${row},${col}:${d}] box:`, box)
                    if (boxes[box][d]) {
                        return false;
                    }
                    boxes[box][d] = true;
                }
            }
        }
        return true;
        // check each row
        // check each column
    }
}
