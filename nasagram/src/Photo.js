import React from 'react';

const Photo = (props) => {
    const {
        url,
        title,
        date,
        explanation
    } = props

    return (
        <ul>
            <img src={url} alt="NASA portait"/>
            <p>{title} </p>
            <p>{date}</p>
            <p>{explanation}</p>
        </ul>
    )
}

export default Photo