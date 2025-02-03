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
            <h2>Welcome to Sharma Productions!
                I am thrilled to have you here. With a deep-rooted passion for music and 
                dance, I take pride in celebrating and sharing the richness of Indian culture 
                through my services, designed to make your events truly unforgettable.
            </h2>
            <h2>
            Explore the Services section for a detailed overview of how I can bring creativity 
            and elegance to your special occasion. To discover past performances and hear from 
            delighted clients, visit the Gallery and Reviews sections. If you're interested in 
            connecting or booking my services, the Contact Me section is just a click away.
            Thank you for visiting—scroll down to learn more about my story and the inspiration
             behind Sharma Productions!
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
                <p > Suvan Sharma is a highly skilled Indo-Guyanese artist, 
                    classically trained in tabla and dhol from the age of eight.
                     With years of experience and a deep passion for these traditional 
                     instruments, Suvan shares his expertise by offering personalized lessons
                      tailored to the unique needs of each student. In addition to his musical
                       accomplishments, Suvan has been formally trained in bhangra folk arts and
                        served as the captain of the University of South Florida’s nationally
                       competitive bhangra team.
                </p>
            <p>
            Suvan has performed at over 100 events worldwide, collaborating with esteemed DJs and event
             planners to deliver unforgettable experiences. His dedication to excellence ensures every event
              he contributes to is both unique and memorable. Driven by a mission to foster a communal appreciation
               for culture, Suvan captivates audiences with heartfelt performances that blend artistic mastery with a 
               joyous celebration of tradition. Whether performing, teaching, or collaborating, Suvan Sharma is committed
                to inspiring a deep connection to culture and creating lasting memories for all involved.
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

