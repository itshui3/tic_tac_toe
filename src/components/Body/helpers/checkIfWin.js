
function checkRows(board) {
    for (let i = 0; i < board.length; i++) {
        if (
            board[i][0] === 'x' &&
            board[i][1] === 'x' &&
            board[i][2] === 'x') {
            // p1 win
            return 'p1'
        } else if (
            board[i][0] === 'o' &&
            board[i][1] === 'o' &&
            board[i][2] === 'o'
        ) {
            // p2 win
            return 'p2'
        } 
    }
}

function checkCols(board) {
    for (let i = 0; i < board.length; i++) {
        if (
            board[0][i] === 'x' &&
            board[1][i] === 'x' &&
            board[2][i] === 'x'
        ) {
            return 'p1'
        } else if (
            board[0][i] === 'o' &&
            board[1][i] === 'o' &&
            board[2][i] === 'o'
        ) {
            return 'p2'
        }
    }
}

function checkDiags(board) {
    if (
        board[0][0] === 'x' &&
        board[1][1] === 'x' &&
        board[2][2] === 'x'
    ) {
        return 'p1'
    } else if (
        board[2][2] === 'x' &&
        board[1][1] === 'x' &&
        board[0][0] === 'x'
    ) {
        return 'p1'
    }

    if (
        board[0][0] === 'o' &&
        board[1][1] === 'o' &&
        board[2][2] === 'o'
    ) {
        return 'p1'
    } else if (
        board[2][2] === 'o' &&
        board[1][1] === 'o' &&
        board[0][0] === 'o'
    ) {
        return 'p2'
    }
}

function checkIfWin(board) {
    let checkedRows = checkRows(board)
    let checkedCols = checkCols(board)
    let checkedDiags = checkDiags(board)

    if (
        checkedRows === 'p1' ||
        checkedCols === 'p1' ||
        checkedDiags === 'p1'
        ) { return 'p1' }

    if (
        checkedRows === 'p2' ||
        checkedCols === 'p2' ||
        checkedDiags === 'p2'
        ) { return 'p2' }

    return 'continue'
}

export { checkIfWin }