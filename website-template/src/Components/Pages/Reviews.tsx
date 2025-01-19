
import NavBar from "../NavBar/NavBar"
import EndingHeader from "../EndingHeader/EndingHeader"
import React, {useState, useEffect} from "react";
import "./Reviews.css"
import home2 from '../../assets/contactbanner.png'
import dhol11 from '../../assets/dhol/dhol11.jpeg'
import dance8 from '../../assets/dance/dance8.jpeg'
import dance10 from '../../assets/dance/dance10.jpeg'
import dance4 from '../../assets/dance/dance4.jpeg'


export const Reviews = () => {
    type FormData = {
        name: string;
        date: string;
        email: string;
        phone: string;
        message: string;
      };
      type Review = {
        _id: string; 
        name: string;
        message: string;
        date: string;
      };
      const [reviews, setReviews] = useState<Review[]>([]);


    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        date: "",
        email: "",
        phone: "",
        message: "",
      });
      const [isFormValid, setIsFormValid] = useState(false);

      useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await fetch("https://sharmaproductions.onrender.com/reviews");
            const data = await response.json();
            setReviews(data);
          } catch (error) {
            console.error("Error fetching reviews:", error);
          }
        };
    
        fetchReviews();
      }, []);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        setIsFormValid(
          Object.values({ ...formData, [name]: value }).every((field) => field.trim() !== "")
        );
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>  ) => {
        e.preventDefault();
    
        if (!isFormValid) {
          alert("Please fill in all fields.");
          return;
        }
        setLoading(true);
    
        try {
          const response = await fetch("https://sharmaproductions.onrender.com/submit-reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert("Review submitted successfully!");
            setFormData({
              name: "",
              date: "",
              email: "",
              phone: "",
              message: "",
            });
            setIsFormValid(false);
    
            // Refresh the reviews list
            const updatedReviews = await fetch("https://sharmaproductions.onrender.com/reviews");
            setReviews(await updatedReviews.json());
          } else {
            alert("Failed to submit review.");
          }
        } catch (error) {
          console.error("Error submitting review:", error);
        } finally {
            setLoading(false);
        }
      };
    
      const images = [
        dhol11,
        dance8,
        dance10,
        dance4
      ]

      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      };

    return <div>
      <NavBar />
      <div className="reviews-list">
      <div className="banner-container">
            <img src={home2} alt="Suvan posing with long hair" className="banner-image"/>
            <div className="banner-services">
                <div className="img-text-services">
                     <h2>Customer Reviews</h2>
                </div>
             </div>
        </div>

        {reviews.length === 0 ? (
            <p>No reviews available yet.</p>
        ) : (
            reviews.map((review, index) => (
            <div key={index} className="review-card"
            style= {{ backgroundImage: `url(${getRandomImage()})`}}>
             <div className="review-message">{"\"" + review.message + "\""}</div>
          <div className="review-name">{"-" + review.name}</div>

            </div>
            ))
        )}
        </div>
      <div className="container">
      <div className="form-container">
        <h1>Submit A Review!</h1>
        <p>
            Please submit a review to give me feedback on how to improve!
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text"
             id="name" name="name" 
             placeholder="Your Name"
             onChange={handleChange} 
             required />

            <label htmlFor="date">Current Date</label>
            <input type="date" id="date"
             name="date" 
             onChange={handleChange}
             required />

            <label htmlFor="email">E-mail address</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            onChange={handleChange}
            required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            onChange={handleChange}
            required
            />

            <label htmlFor="message">Review</label>
            <textarea
            id="message"
            name="message"
            placeholder="Add Your Review..."
            onChange={handleChange}
            rows={5}
            maxLength={100}
            required
            ></textarea>

            <button type="submit" disabled={!isFormValid}> 
                {loading ? "Submitting..." : "Send Review"}
                </button>
        </form>
        </div>
     </div>
      
      <EndingHeader />
    </div>
}