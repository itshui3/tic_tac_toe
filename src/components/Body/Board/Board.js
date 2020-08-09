import React from 'react'
// styles
import './Board.css'

const Board = ({handleMove, board, gameState}) => {

    return (
        <>
            <div className='board_cont'>
                {
                    board.map( (r, rId) => (
                        <div 
                        className='row'
                        key={rId}
                        >
                            {
                                r.map( (c, cId) => (
                                    <div 
                                    className='cell' 
                                    key={cId}
                                    onClick={(ev) => handleMove(rId, cId, gameState)}
                                    >
                                        <p className='cell_txt'>{c}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Board