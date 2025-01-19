import NavBar from "../NavBar/NavBar"
import EndingHeader from "../EndingHeader/EndingHeader"
import './Gallery.css'
import dance1 from '../../assets/dance/dance1.jpeg'
import dance2 from '../../assets/dance/dance2.jpeg'
import dance3 from '../../assets/dance/dance3.jpeg'
import dance4 from '../../assets/dance/dance4.jpeg'
import dance5 from '../../assets/dance/dance5.jpeg'
import dance6 from '../../assets/dance/dance6.jpeg'
import dance7 from '../../assets/dance/dance7.jpeg'
import dance8 from '../../assets/dance/dance8.jpeg'
import dance9 from '../../assets/dance/dance9.jpeg'
import dance10 from '../../assets/dance/dance10.jpeg'
import dance11 from '../../assets/dance/dance11.jpeg'
import dance12 from '../../assets/dance/dance12.jpeg'
import dhol1 from '../../assets/dhol/dhol1.jpeg'
import dhol2 from '../../assets/dhol/dhol2.jpeg'
import dhol3 from '../../assets/dhol/dhol3.jpeg'
import dhol5 from '../../assets/dhol/dhol5.jpeg'
import dhol6 from '../../assets/dhol/dhol6.jpeg'
import dhol7 from '../../assets/dhol/dhol7.jpeg'
import dhol8 from '../../assets/dhol/dhol8.jpeg'
import dhol9 from '../../assets/dhol/dhol9.jpeg'
import dhol10 from '../../assets/dhol/dhol10.jpeg'
import dhol11 from '../../assets/dhol/dhol11.jpeg'
import dhol12 from '../../assets/dhol/dhol12.jpeg'
import dhol13 from '../../assets/dhol/dhol13.jpeg'
import dhol14 from '../../assets/dhol/dhol14.jpeg'
import dhol15 from '../../assets/dhol/dhol15.jpeg'
import dhol16 from '../../assets/dhol/dhol16.jpeg'
import tabla1 from '../../assets/tabla/tabla1.jpeg'
import tabla2 from '../../assets/tabla/tabla2.jpeg'
import tabla3 from '../../assets/tabla/tabla3.jpeg'











const images = [
    dance1, dance2, dance3,dance4,
    dance5,dance6,dance7,dance8,
    dance9, dance10, dance11,dance12,
    dhol1, dhol2, dhol3, dhol5, 
    dhol6, dhol7, dhol8, dhol9, dhol10,
    dhol11, dhol12, dhol13, dhol14, dhol15,
    dhol16, tabla1, tabla2, tabla3
];
  
  export const Gallery = () => {
    return (

        <div>
           <NavBar />
           <div className="gallery">
            {images.map((src, index) => (
                <div className="gallery-item" key={index}>
                <img src={src} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
                </div>
            ))}
            </div>
            <EndingHeader />
        </div>
     
    );
  };
  
