import React from 'react';

const Photo = (props) => {
    const {
        url,
        title,
        date,
        explanation
    } = props

    return (
        <section>
            <img src={url} alt="NASA portait"/>
            <p>{title} </p>
            <p>{date}</p>
            <p>{explanation}</p>
        </section>
    )
}

export default Photo