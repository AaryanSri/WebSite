const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = 3002;
const mongoose = require("mongoose")
const mongoUri = process.env.DATABASE_URI
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"))
db.once("open", () => {
  console.log("Connected to MongoDB successfully")
})

const reviewSchema = new mongoose.Schema({
  name: String,
  date: String,
  verified: {type: Boolean, default: false},
  message: String
})

const Review = mongoose.model("Review", reviewSchema);



app.use(express.json());
app.use(cors());

app.post("/submit-reviews", async (req, res) => {
  const {name, date, email, phone, message } = req.body;

  if (!name || !date || !email || !phone || !message) {
    return res.status(400).json({error: "All fields are required"});
  }

  try {
    // Save review to MongoDB
    const newReview = new Review({ name, date, message });
    await newReview.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: process.env.EMAIL_TO,
      subject: `New Review Submitted by ${name}`,
      text: `
        Name: ${name}
        Date: ${date}
        Email: ${email}
        Phone: ${phone}
        Review: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Review submitted successfully!" });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Failed to submit review." });
  }

});


app.post("/send-review-email", async (req, res) => {
    const { to, subject, body } = req.body;
  
    if (!to || !subject || !body) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_ID,
        to,
        subject,
        text: body,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });


  app.get("/reviews", async (req, res) => {
    try {
      const reviews = await Review.find({verified: true});
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews." });
    }
  });

  app.listen(PORT, () => {
    console.log('server is running on http://localhost:3002')
  });
  