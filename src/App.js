import React, { useState, useEffect } from 'react'

const data = [
    {
        firstName: "Booty",
        catchphrase: "Go do it",
        color: "hotpink"
    },
    {
        firstName: "Goffer",
        catchphrase: "Stop me now",
        color: "lime"
    },
    {
        firstName: "Sooty",
        catchphrase: "Ahoo",
        color: "yellow"
    }
]

const colors = ["hotpink", "lime", "salmon", "yellow", "midnightblue"]

function PersonCard ({firstName, catchphrase, setBorderIndex}) {
    const [colorIndex, setColorIndex] = useState(0)

    useEffect(() => {
        setBorderIndex(colorIndex)
    }, [colorIndex])

    const style = {
        width: '12rem', 
        padding: '1rem', 
        backgroundColor: colors[colorIndex]
    }

    const changeColor = () => {
        if (colorIndex >= colors.length - 1) {
            setColorIndex(0)
        } else {
            setColorIndex(colorIndex + 1)
        }
    }

    return (
        <article style={style}>
            <h3>{firstName}</h3>
            <blockquote>{catchphrase} {colorIndex}</blockquote>
            <button onClick={changeColor}>Change up</button>
        </article>
    )
}

export const App = () => {
    const [borderIndex, setBorderIndex] = useState(0)

    const style = {
        border: `solid 8px ${colors[borderIndex]}`
    }

    return (
        <fieldset style={style}>
            <legend>People</legend>
            {data.map(person => {
                return <PersonCard {...person} setBorderIndex={setBorderIndex} />
            })}
        </fieldset>
    )
}


