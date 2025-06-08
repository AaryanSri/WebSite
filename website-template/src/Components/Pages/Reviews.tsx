
import NavBar from "../NavBar/NavBar"
import EndingHeader from "../EndingHeader/EndingHeader"
import React, {useState, useEffect} from "react";
import "./Reviews.css"
import home2 from '../../assets/contactbanner.png'


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
    

    return <div>
      <NavBar />
      <div className="container">
      <div className="form-container">
        <h1>Submit A Review!</h1>
        <p>
        Your feedback means a lot to me! Please share your experience and let me know how I’ve helped you. 
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
            required
            ></textarea>

            <button type="submit" disabled={!isFormValid}> 
                {loading ? "Submitting..." : "Send Review"}
                </button>
        </form>
        </div>
      <div className="reviews-list">
      <div className="banner-container">
            <img src={home2} alt="Suvan posing with long hair" className="banner-image"/>
            <div className="banner-services">
                <div className="img-text-services">
                     <h2>Client Reviews</h2>
                     
                </div>
             </div>
        </div>
        {reviews.length === 0 ? (
            <p>No reviews available yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="comment-container">
              <div className="avatar" />
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-name">{review.name}</span>
                  <span className="comment-date">{review.date}</span>
                </div>
                <div className="comment-message">{review.message}</div>
              </div>
            </div>
            ))
        )}
        </div>
        <EndingHeader />
        </div>

        

    </div>
}