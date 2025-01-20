import  {useState} from "react";
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
                        <h2> Lessons </h2>
                        </div>       
            </div>
            <div className="toggle-box-container">
                        <div className={`toggle-box ${activeBox === 'dhol' ? 'show' : ''}`}>
                            <p>Dhol is a Indian percussionary instrument perfect for adding vibrance and excitement 
                               to any event! 
                               Suvan has performed dhol at 100+ events internationally!
                            </p>
                        </div>
                        <div className={`toggle-box ${activeBox === 'tabla' ? 'show' : ''}`}>
                            <p>Tabla is a traditional Indian percussionary instrument perfect for creating a beautiful
                                 and melodious atmosphere. This instrument is a great option for more sophisticated events 
                                 like concerts, banquets, and receptions.
                            </p>
                        </div>
                   
                        <div className={`toggle-box ${activeBox === 'bhangra' ? 'show' : ''}`}>
                            <p>Bhangra is a high-energy Punjabi folk dance that brings energy wherever it is performed. 
                                Our nationally competitive team of up to 16 dancers performs at conferences, birthdays, 
                                weddings, etc.
                            </p>
                        </div>
                        <div className={`toggle-box ${activeBox === 'teaching' ? 'show' : ''}`}>
                            <p>Tabla and Dhol personalized lessons continue to be in full swing!</p>
                        </div>
            
             </div>    

        </div>
        <div className="dhol-banner-container">
                <img src={dholbanner} alt="Suvan playing dhol" className="dhol-banner"></img>
                <div className="dhol-text-container"> 
                    <p>Dhol is a Indian percussionary instrument perfect for adding vibrance and excitement to any event! 
                       Suvan has performed dhol at 100+ events internationally!
                    </p>
                    <p>
                    For more information about this service, please visit the Contact Me page and provide your details.
                     I will be happy to reach out to you promptly!  
                    </p>
                </div>
             </div>
             <div className="dhol-banner-container">
             <div className="dhol-text-container"> 
                    <p>Tabla is a traditional Indian percussionary instrument perfect 
                       for creating a beautiful and melodious atmosphere. This instrument
                        is a great option for more sophisticated events like concerts, 
                        banquets, and receptions.
                    </p>
                    <p>
                    For more information about this service, please visit the Contact Me page and
                     provide your details. I will be happy to reach out to you promptly!  
                    </p>
                </div>
                <img src={tablabanner} alt="Suvan playing tabla" className="dhol-banner"></img>
             </div>
             <div className="dhol-banner-container">
                <img src={dancingbanner} alt="Suvan playing dhol" className="dhol-banner"></img>
                <div className="dhol-text-container"> 
                    <p>Bhangra is a high-energy Punjabi folk dance that brings energy
                       wherever it is performed. Our nationally competitive team of up to
                       16 dancers performs at conferences, birthdays, weddings, etc.
                    </p>
                    <p>
                    For more information about this service, please visit the Contact Me page and
                     provide your details. I will be happy to reach out to you promptly!  
                    </p>
                </div>
             </div>
             <div className="dhol-banner-container">
                <div className="dhol-text-container"> 
                    <p>Tabla and Dhol personalized lessons continue to be in full swing!
                    </p>
                    <p>
                    For more information about this service, please visit the Contact Me page
                     and provide your details. I will be happy to reach out to you promptly!  
                    </p>
                </div>
                <img src={teachingbanner} alt="Suvan playing dhol" className="dhol-banner"></img>
             </div>

        
        <EndingHeader />
    </div>
}