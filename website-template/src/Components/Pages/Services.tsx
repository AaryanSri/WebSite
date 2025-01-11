import React, {useState} from "react";
import NavBar from '../NavBar/NavBar'
import EndingHeader from '../EndingHeader/EndingHeader'
import services1 from '../../assets/dhol/dhol16.jpeg'
import './services.css'
import dholbanner from '../../assets/banners/dholbanner.png'
import tablabanner from '../../assets/banners/tablabanner.png'
import dancingbanner from '../../assets/banners/dancingbanner.png'
import teachingbanner from '../../assets/banners/teachingbanner.png'

export const Services = () => {
    const [activeBox, setActiveBox] = useState<string | null>(null);

    const toggleBox = (box: string) => {
        setActiveBox(activeBox === box ? null : box); // Toggle between showing and hiding the box
    };
    return <div>
        <NavBar />
     <div className="image-container-services">
        <img src={services1} alt="Suvan playing tabla" className="image-services" />
            <div className="banner-services">
                <div className="img-text-services">
                <h2>Sharma Productions</h2>
                </div>
                
            </div>
            <div className = "img-text-services-row-1">
                        <div className="glassbox" onClick={() => toggleBox('dhol')}>
                        <h2> Dhol </h2>
                        </div>
                        <div className="glassbox" onClick={() => toggleBox('tabla')}>
                        <h2> Tabla </h2>
                        </div>
                        <div className="glassbox" onClick={() => toggleBox('bhangra')}>
                        <h2> Bhangra </h2>
                        </div>
                        <div className="glassbox" onClick={() => toggleBox('teaching')}>
                        <h2> Teaching </h2>
                        </div>       
            </div>
            <div className="toggle-box-container">
                        <div className={`toggle-box ${activeBox === 'dhol' ? 'show' : ''}`}>
                            <p>The Dhol is a double-headed drum played with sticks, known for its energetic sound.</p>
                        </div>
                        <div className={`toggle-box ${activeBox === 'tabla' ? 'show' : ''}`}>
                            <p>The Tabla is a pair of hand drums used in classical and folk music.</p>
                        </div>
                   
                        <div className={`toggle-box ${activeBox === 'bhangra' ? 'show' : ''}`}>
                            <p>Bhangra is a traditional Punjabi dance that brings joy and energy to any occasion.</p>
                        </div>
                        <div className={`toggle-box ${activeBox === 'teaching' ? 'show' : ''}`}>
                            <p>We offer lessons in music and dance to help you master these art forms.</p>
                        </div>
            
             </div>    

        </div>
        <div className="dhol-banner-container">
                <img src={dholbanner} alt="Suvan playing dhol" className="dhol-banner"></img>
                <div className="dhol-text-container"> 
                    <p>With around a decade of experience, I love bringing
                        the excitement of music to several events to elevate
                        the host's occasion. I have been a part of weddings,
                         musical festivals, performances, and more!
                    </p>
                    <p>
                        To find out more details about this service, please visit
                        the contact me page and give me your information so I can reach
                        out!
                    </p>
                </div>
             </div>
             <div className="dhol-banner-container">
             <div className="dhol-text-container"> 
                    <p>With around a decade of experience, I love bringing
                        the excitement of music to several events to elevate
                        the host's occasion. I have been a part of weddings,
                         musical festivals, performances, and more!
                    </p>
                    <p>
                        To find out more details about this service, please visit
                        the contact me page and give me your information so I can reach
                        out!
                    </p>
                </div>
                <img src={tablabanner} alt="Suvan playing tabla" className="dhol-banner"></img>
             </div>
             <div className="dhol-banner-container">
                <img src={dancingbanner} alt="Suvan playing dhol" className="dhol-banner"></img>
                <div className="dhol-text-container"> 
                    <p>With around a decade of experience, I love bringing
                        the excitement of music to several events to elevate
                        the host's occasion. I have been a part of weddings,
                         musical festivals, performances, and more!
                    </p>
                    <p>
                        To find out more details about this service, please visit
                        the contact me page and give me your information so I can reach
                        out!
                    </p>
                </div>
             </div>
             <div className="dhol-banner-container">
                <div className="dhol-text-container"> 
                    <p>With around a decade of experience, I love bringing
                        the excitement of music to several events to elevate
                        the host's occasion. I have been a part of weddings,
                         musical festivals, performances, and more!
                    </p>
                    <p>
                        To find out more details about this service, please visit
                        the contact me page and give me your information so I can reach
                        out!
                    </p>
                </div>
                <img src={teachingbanner} alt="Suvan playing dhol" className="dhol-banner"></img>
             </div>

        
        <EndingHeader />
    </div>
}