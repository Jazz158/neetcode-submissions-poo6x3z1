class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = Array.from({length : 9}, () => new Set())
        const columuns = Array.from({length : 9}, () => new Set())
        const boxes = Array.from({length : 9}, () => new Set())


        for (let r = 0; r < rows.length;r++ ){
            for (let  c = 0 ; c < columuns.length; c ++){
                const val = board[r][c]

                if (val === ".") continue

                const boxesposition = Math.floor(r/3) * 3 + Math.floor(c/3)

                if (rows[r].has(val)) return false
                if (columuns[c].has(val)) return false
                if (boxes[boxesposition].has(val)) return false


                rows[r].add(val)
                columuns[c].add(val)
                boxes[boxesposition].add(val)


            }
        }

        return true


    }
    }

