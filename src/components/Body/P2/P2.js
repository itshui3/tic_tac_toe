import React, { useState, useEffect } from 'react'
// style
import './P2.css'

const P2 = ({score}) => {

    const [numerals, setNumerals] = useState(0)

    useEffect(() => {
        let nums = ''
        for (let i = 0; i < score; i++) {
            nums += 'I'
        }

        setNumerals(nums)
    }, [score])

    return (
        <>
            <div className='P2_font'>
                Player 2's Score: <br></br>{numerals}
            </div>
        </>
    )
}

export default P2