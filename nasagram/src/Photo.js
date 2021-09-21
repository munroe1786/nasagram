import React from 'react';

const Photo = (props) => {

    return (
        <section>
            <img src={props.url} alt="NASA photo"/>
        </section>
    )
}

export default Photo