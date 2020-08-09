function checkIfFilled(board) {
    for (let l = 0; l < board.length; l++) {

        for (let i = 0; i < board[0].length; i++) {
            if (board[l][i] === '') {
                return false
            }
        }
    }

    return true
}

export { checkIfFilled }