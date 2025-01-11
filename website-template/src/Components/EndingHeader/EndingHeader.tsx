import React, {useState, useEffect} from 'react'
import logo from '../../assets/samplelogo.avif'
import {Link} from 'react-router-dom'
import './EndingHeader.css'
import instagram from "../../assets/instagram.png"
import soundcloud from "../../assets/soundcloud.png"
import phone from "../../assets/phone.png"
import dhol from "../../assets/dhol.png"
import tabla from "../../assets/tabla.png"
const EndingHeader = () => {


   
    return (
        
        <div className="EndingText">
            <div className="left-content">    
                <img src={dhol} alt="Dhol" className="ending-image-left" />
                <img src={tabla} alt="Tabla" className="ending-image-left" />

            </div>
            <div className="right-content">
            <h1> Get Connected!</h1> 
            <a href="https://www.instagram.com/suvan_sharma/" target="_blank" rel="noopener noreferrer" className="bar1">
                 <img src={instagram} alt="Instagram" className="ending-image" />
                 <p> Instagram </p> 
             </a>
             <a href="https://soundcloud.com/spicysuv" target="_blank" rel="noopener noreferrer" className="bar1">
                 <img src={soundcloud} alt="SoundCloud" className="ending-image" />
                 <p> SoundCloud </p> 
             </a>

            <div className="bar1">
            <img src={phone} alt="Phone" className="ending-image" />

            <p> Call: 813-618-8580  </p> 
            </div>
            </div>
        

        </div>
    );
};

export default EndingHeader;