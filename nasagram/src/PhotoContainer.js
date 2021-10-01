import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {

    return(
        <div>
            {props.photos.map(photo =>
                <li key={photo.id}>
                    <Photo url={photo.url} 
                            title={photo.title}  
                            date={photo.date}  
                    />
                </li>)}
        </div>
    )
};

export default PhotoContainer;