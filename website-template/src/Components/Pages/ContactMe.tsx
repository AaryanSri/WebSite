import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import EndingHeader from "../EndingHeader/EndingHeader";
import "./ContactMe.css";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setIsFormValid(
      Object.values({ ...formData, [name]: value }).every((field) => field.trim() !== "")
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://sharmaproductions.onrender.com/send-review-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "suvansharma7@gmail.com",
          subject: "New Contact Request from${formData.name}",
          body: `
            Name: ${formData.name}
            Date: ${formData.date}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
          `,
        }),
      });

      if (response.ok) {
        alert("Your request has been sent successfully!");
        setFormData({
          name: "",
          date: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsFormValid(false);
      } else {
        alert("Failed to send your request. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="form-container">
          <h1>Sharma Productions</h1>
          <p>
            Please fill out the form below with the details of your event and
            I'll reach out with more information!
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="date">Current Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-mail address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={!isFormValid}>
              Send Request
            </button>
          </form>
        </div>
      </div>
      <EndingHeader />
    </div>
  );
};

