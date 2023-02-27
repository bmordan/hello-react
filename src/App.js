import React from 'react'

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

function PersonCard ({color, firstName, catchphrase}) {
    const style = {
        width: '12rem', 
        padding: '1rem', 
        backgroundColor: color
    }
    return (
        <article style={style}>
            <h3>{firstName}</h3>
            <blockquote>{catchphrase}</blockquote>
        </article>
    )
}

const Greeting = ({size, greeting}) => {
    const style = {
        fontSize: `${size}px`,
        display: 'inline-block'
    }
    return (
        <h2 style={style}>
            Hello {greeting}
        </h2>
    )
}

const ListHolder = (props) => {
    return (
        <fieldset style={{background: 'hotpink', padding: '1rem'}}>
            <legend>My List</legend>
            {props.children}
        </fieldset>
    )
}

export const App = () => {
    return (
        <fieldset>
            <legend>Parent</legend>
            <Greeting size="32" greeting="Clubbers" />
            <ListHolder>
                <li>Do the washing up</li>
                <li>Learn some more react</li>
                <li>Stop this now</li>
                <li>
                    <Greeting size="7" greeting="squeek"/>
                </li>
            </ListHolder>
            <hr />
            {data.map(person => {
                return <PersonCard {...person} />
            })}
        </fieldset>
    )
}


