import React, { useState, useEffect } from 'react'
// style
import './P1.css'

const P1 = ({score}) => {

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
            <div className='P1_font'>
                Player 1's Score: <br></br>{numerals}
            </div>
        </>
    )
}

export default P1