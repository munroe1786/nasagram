import React from 'react';
import Photo from './Photo';
import HeartToggle from './HeartToggle';

const PhotoContainer = (props) => {

    return(
        <div>
            {props.photos.map(photo =>
                <li key={photo.id}>
                    <Photo url={photo.url} 
                            title={photo.title}  
                            date={photo.date}  
                            explanation={photo.explanation}
                        />
                    <HeartToggle />
                </li>)}
        </div>
    )
};

export default PhotoContainer;