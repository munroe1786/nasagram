import React from 'react';

const Photo = (props) => {
    const {
        url,
        title
    } = props

    return (
        <section>
            <img src={props.url} alt="NASA portait"/>
            <p>{title} </p>
        </section>
    )
}

export default Photo