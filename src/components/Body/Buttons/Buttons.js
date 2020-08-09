import React from 'react'
// styles
import './Buttons.css'

const Buttons = ({gameState, startGame}) => {

    return (
        <>
            <div className='btn_cont'>
                <div 
                className='newgameBtn'
                onClick={startGame}
                >New Game</div>

                {
                    (gameState === 'ng')
                    ? null
                    : (gameState === 'p1')
                    ? <div className='player_notif'>Player 1 Turn...</div>
                    : (gameState === 'p2')
                    ? <div className='player_notif'>Player 2 Turn...</div>
                    : (gameState === 'p1win')
                    ? <div className='player_notif'>Player 1 Wins!</div>
                    : (gameState === 'p2win')
                    ? <div className='player_notif'>Player 2 Wins!</div>
                    : (gameState === 'tie')
                    ? <div className='player_notif'>You tied.. Try again</div>
                    : null
                }

            </div>

        </>
    )
}

export default Buttons