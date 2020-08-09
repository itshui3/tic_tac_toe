
import React, {useState, useEffect} from 'react'
// styles
import './Body.css'
// compos
import P1 from './P1/P1'
import P2 from './P2/P2'

import Buttons from './Buttons/Buttons'
import Board from './Board/Board'
// helpers
import { checkIfWin } from './helpers/checkIfWin'
import { checkIfFilled } from './helpers/checkIfFilled'

const origBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

const Body = () => {
    const [gameState, setGameState] = useState('ng')
    const [board, setBoard] = useState([...origBoard])
    const [score, setScore] = useState({
        p1: 0,
        p2: 0
    })

    useEffect(() => {
        if(checkIfFilled(board)) {

            setBoard(origBoard)
            setGameState('tie')
        } else {
            let checkWin = checkIfWin(board)

            switch(checkWin) {
                case 'p1':
                    setBoard(origBoard)
                    setGameState('p1win')
                    setScore({...score, p1: score['p1'] + 1})
                    break
                case 'p2':
                    setBoard(origBoard)
                    setGameState('p2win')
                    setScore({...score, p2: score['p2'] + 1})
                    break
                case 'continue':
                    break
                default:
                    break
            }
        }
    }, [board])

    const startGame = () => {
        setGameState('p1')
        setBoard(origBoard)
    }

    const handleMove = (r, c, gs) => {
        if (board[r][c] === 'x' || board[r][c] === 'o') { return }

        if (gs !== 'p1' && gs !== 'p2') { return }

        if (gs === 'p1win' || gs === 'p2win' || gs === 'tie') {
            setGameState('ng')
            return
        }

        if (gs === 'p1') {
            setGameState('p2')
            setBoard(board.map( (mappedR, i) => {
                if (r !== i) {
                    return [...mappedR]
                } else {
                    return mappedR.slice(0, c).concat([
                        gs === 'p1'
                        ? 'x'
                        : gs === 'p2'
                        ? 'o'
                        : ''
                    ]).concat(mappedR.slice(c+1))
                }
            }))
        }

        if (gs === 'p2') {
            setGameState('p1')
            setBoard(board.map( (mappedR, i) => {
                if (r !== i) {
                    return [...mappedR]
                } else {
                    return mappedR.slice(0, c).concat([
                        gs === 'p1'
                        ? 'x'
                        : gs === 'p2'
                        ? 'o'
                        : ''
                    ]).concat(mappedR.slice(c+1))
                }
            }))
        }
    }

    return (
        <>
            <div className='body_cont'>
                
                <div className='player_cont'>
                    <P1 score={score['p1']} />
                </div>

                {/* center includes both buttons & board */}
                <div className='center_cont'>
                    <Buttons gameState={gameState} startGame={startGame} />
                    <Board board={board} handleMove={handleMove} gameState={gameState} />
                </div>
                
                <div className='player_cont'>
                    <P2 score={score['p2']} />
                </div>
            </div>
        </>
    )
}

export default Body