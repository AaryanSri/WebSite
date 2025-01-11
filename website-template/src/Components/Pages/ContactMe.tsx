import NavBar from "../NavBar/NavBar"
import EndingHeader from "../EndingHeader/EndingHeader"
import './ContactMe.css'
export const ContactMe = () => {
    return <div>
                <NavBar />
        <div className="container">
      <div className="form-container">
        <h1>SAY HELLO</h1>
        <p>
            Please fill out the form below with the details of your event and I'll reach out 
            with more information!
        </p>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="email">E-mail address</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            ></textarea>

            <button type="submit">Send Request</button>
        </form>
    </div>
     </div>
     <EndingHeader />

      
    </div>
}