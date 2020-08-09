import React, { useState, useEffect } from 'react'

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
            <div>
                Player 2's Score: {numerals}
            </div>
        </>
    )
}

export default P2