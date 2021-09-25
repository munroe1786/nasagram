import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

    return(
        <div>
            {props.photos.map(photo =>
                <li key={photo.id}>
                    <Photo />
                </li>)}
        </div>
    )
    
    //const displayPhotos = () => {
        //{props.photos.map(photo => 
          //  <li key={photo.id}>
            //return <Photo url={photo.url} />;
            //</li>
        //);
    //};

    //return (
      ////  <>
          //  <section>{displayPhotos()}</section>
        //</>
    //);
};

export default PhotoContainer;