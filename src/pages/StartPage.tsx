import React from 'react';
import {NavLink} from "react-router-dom";
import videoBg from '../assets/videos/flat.mp4'

const StartPage = () => {
    return (
        <div className="full-screen">
            <div className="full-screen__body">
                <div className="full-screen__title">FULL SCREEN PAGE</div>
                <div className="full-screen__text">
                    <NavLink to={'/main'}>
                        <button>Let's get cooking</button>
                    </NavLink>
                </div>
            </div>
            <video src={videoBg} autoPlay={true} muted={true}  className="full-screen__video"></video>
        </div>
    );
};

export default StartPage;