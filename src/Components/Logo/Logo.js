import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './smartbrain.jpg';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 40 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img src={brain} /> </div>
                <a href="http://www.freepik.com" className="navy">Designed by Patrickss / Freepik</a>
            </Tilt>
        </div>
    );
}

export default Logo;

