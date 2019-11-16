import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>    
        </div>
    );
}

export default FaceRecognition;

    //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

    //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    // mine - 

