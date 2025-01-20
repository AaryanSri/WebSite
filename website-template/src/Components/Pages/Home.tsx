import './Home.css'
import NavBar from '../NavBar/NavBar'
import home1 from '../../assets/home0.jpg'
import home2 from '../../assets/home2.jpg'
import home4 from '../../assets/home4.jpg'
import EndingHeader from '../EndingHeader/EndingHeader'

export const Home = () => {
    return <div>
        <NavBar />
        <div className="image-container">
            <img src={home1} alt="Suvan playing tabla" className="image" />
         <div className="banner">
            <div className="img-text">
                <h2>Amplify Your Event with Sharma Productions</h2>
            </div>
         </div>
        </div>
        <div className="section">
            <h2>Welcome to Sharma Productions! I am thrilled to have you visit. I've loved 
                the art of music and dance my whole life and spreading Indian culture through
                the services I provide to improve your events is an incredible fulfillment!
            </h2>
            <h2>
                For a brief idea of what I do and how I can benefit your event, check out the Services section!
                To see my previous performances and feedback, visit the Gallery and Reviews section!
                If you would like to contact or book me, visit the contact me section! Otherwise, feel free to scroll down
                and learn more about me!
            </h2>
        </div>
        <div className="banner-container">
            <img src={home4} alt="Suvan posing with long hair" className="banner-image"/>
            <div className="banner-img-text">
                <h2>
                    About Me
                </h2>
            </div>
        </div>
        <div className="bio-container">
            <div className="bio">
                <p > Suvan Sharma is an Indo-Guyanese artist that specializes in dhol, tabla, and bhangra. 
                    Classically trained from the age of 8 years old, Suvan aims to spread his love for tabla 
                    and dhol as he teaches multiple students a week with personalized lesson plans catered to 
                    each individual. Suvan has also been academy trained in bhangra folk arts, and has been the
                    captain of the University of South Florida’s nationally competitive bhangra team.

</p>
            <p>
            Performing at over 100 events all around the world and working with countless DJs and planners, 
            Suvan is dedicated to ensuring the event is memorable through whatever service is asked from the client.
             Committed to creating a sense of communal appreciation for culture, Suvan’s goal is to captivate audiences with
             heartfelt and unforgettable performances, whether it is music or dance, and have fun in the process!
            </p>
            </div>
            <div className="bio-image">
                <img src={home2} alt="Suvan playing dhol" className="bio-image1">
                </img>
            </div>
        </div>
        <EndingHeader />
    </div>
}